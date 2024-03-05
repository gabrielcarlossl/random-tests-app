import React from 'react'

export default function Root() {
    return (
      <>
        <div>
          <h1>Pages</h1>
          <nav>
            <ul>
              <li>
                <a href={`/download-file`}>Download File</a>
              </li>
              <li>
                <a href={`/answer-questions`}>Answer Questions</a>
              </li>
              <li>
                <a href={`/card`}>Card Pagination</a>
              </li>
              <li>
                <a href={`/table`}>Table</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }