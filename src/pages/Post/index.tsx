import { useParams } from "react-router-dom";
import { PostTitle } from "./PostTitle";
import { PostContainer, PostContent } from "./style";
import { RepoContext } from "../../Contexts/RepoContext";
import { useContext, useEffect } from "react";
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import rehypeHighlight from 'rehype-highlight';
/* import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from "unified"; */

export function Post(){
    const {getRepoIssueData, actualIssue} = useContext(RepoContext);
    const {issueId} = useParams();

    const body = "### Describe the bug\n\n## Bug Description\n\n  The application crashes with `TypeError: Cannot read\n  property 'data' of undefined` when network errors occur\n  (timeouts, DNS failures, connection refused, etc.) due to\n  unsafe property access on `err.response` in the error\n  handling code.\n\n  ## Affected Files\n\n  1. **`src/common/retryer.js:66-69`** (Critical - affects all\n   GitHub API calls)\n  2. **`src/fetchers/wakatime.js:24`** (Critical - affects\n  Wakatime stats fetching)\n\n  ## Root Cause\n\n  When axios encounters network-level errors (ECONNREFUSED,\n  ETIMEDOUT, ENOTFOUND, etc.), the error object does not\n  contain a `response` property. The current code attempts to\n  access `err.response.data` and `err.response.status`\n  directly without null-safety checks, causing crashes.\n\n  ### Problematic Code\n\n  **src/common/retryer.js:66-69:**\n  ```javascript\n  } catch (err) {\n    // ❌ CRASHES if err.response is undefined\n    const isBadCredential = err.response.data &&\n  err.response.data.message === \"Bad credentials\";\n    const isAccountSuspended =\n      err.response.data &&\n      err.response.data.message === \"Sorry. Your account was\n  suspended.\";\n\n    if (isBadCredential || isAccountSuspended) {\n      logger.log(`PAT_${retries + 1} Failed`);\n      retries++;\n      return retryer(fetcher, variables, retries);\n    } else {\n      return err.response;  // Returns undefined if\n  err.response doesn't exist\n    }\n  }\n\n  src/fetchers/wakatime.js:24:\n  } catch (err) {\n    // ❌ CRASHES if err.response is undefined\n    if (err.response.status < 200 || err.response.status >\n  299) {\n      throw new CustomError(\n        `Could not resolve to a User with the login of\n  '${username}'`,\n        \"WAKATIME_USER_NOT_FOUND\",\n      );\n    }\n    throw err;\n  }\n```\n\n  Impact\n\n  - Severity: 🔴 HIGH\n  - User Impact: Complete API endpoint failure with 500 errors\n  - Frequency: Occurs during network instability, DNS issues,\n  or GitHub API unavailability\n  - Scope: Affects all users attempting to generate stats\n  cards during network issues\n\n  Steps to Reproduce\n\n  1. Simulate network timeout or connection failure to GitHub\n  API\n  2. Attempt to fetch GitHub stats\n  3. Observe TypeError: Cannot read property 'data' of\n  undefined crash\n  4. API returns 500 error instead of graceful error handling\n\n  Quick reproduction (for testing):\n```\n  // Simulate network error without response object\n  const networkError = new Error('ECONNREFUSED');\n  // networkError.response is undefined\n```\n  Expected Behavior\n\n  The application should gracefully handle network errors and\n  either:\n  - Retry with the next available token\n  - Return a user-friendly error message\n  - Not crash the entire API endpoint\n\n  Actual Behavior\n\n  Application crashes with unhandled exception, breaking the\n  API endpoint completely.\n\n  Proposed Solution\n\n  Use optional chaining (?.) for safe property access:\n\n  Fix for src/common/retryer.js:\n```\n  } catch (err) {\n    // ✅ Safe property access\n    const isBadCredential = err.response?.data?.message ===\n  \"Bad credentials\";\n    const isAccountSuspended = err.response?.data?.message ===\n   \"Sorry. Your account was suspended.\";\n\n    if (isBadCredential || isAccountSuspended) {\n      logger.log(`PAT_${retries + 1} Failed`);\n      retries++;\n      return retryer(fetcher, variables, retries);\n    } else {\n      // Handle case where err.response doesn't exist\n      return err.response || { data: { errors: [{ message:\n  err.message }] } };\n    }\n  }\n```\n\n  Fix for src/fetchers/wakatime.js:\n```\n  } catch (err) {\n    // ✅ Safe property access with fallback\n    const status = err.response?.status;\n    if (status && (status < 200 || status > 299)) {\n      throw new CustomError(\n        `Could not resolve to a User with the login of\n  '${username}'`,\n        \"WAKATIME_USER_NOT_FOUND\",\n      );\n    }\n    throw err;\n  }\n\n  Evidence of Inconsistency\n\n  Interestingly, api/status/pat-info.js:97 already uses the\n  correct pattern:\n  const errorMessage =\n  err.response?.data?.message?.toLowerCase();  // \n```\n✅ Correct\n\n  This indicates awareness of the issue in newer code, but\n  older error handlers weren't updated.\n\n  Additional Recommendations\n\n  1. Add test coverage for network error scenarios in\n  tests/retryer.test.js\n  2. Audit all err.response usage across the codebase for\n  consistency\n  3. Add ESLint rule to prevent unsafe optional property\n  access on error objects\n\n  Related Code\n\n  - Git blame shows lines 66-69 in retryer.js date back to\n  2020-2023\n  - Recent commit ba9406e added comments about rate limit\n  detection but didn't fix the unsafe access\n\n  Environment\n\n  - Node.js: v22+ (as per package.json engines)\n  - All deployment environments affected (Vercel, self-hosted)\n\n### Expected behavior\n\n_No response_\n\n### Screenshots / Live demo link\n\n_No response_\n\n### Additional context\n\n_No response_";
    
    if(issueId){
        getRepoIssueData(issueId)
    }else{
        console.log("iride");
    }

    console.log(issueId)
    return(
        <PostContainer>
            <PostTitle />
                <PostContent className="postContainer">
                    {/* <Markdown rehypePlugins={[[rehypeHighlight, {detect: true}]]}>
                        {body}
                    </Markdown> */}
                    <Markdown
                        children={body}
                        components={{
                        code(props) {
                            const {children, className, node, ...rest} = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                            <SyntaxHighlighter
                                {...rest}
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={dark}
                            />
                            ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                            )
                        }
                        }}
                    />
                </PostContent>
        </PostContainer>
    );
}