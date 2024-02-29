import React from 'react'

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Pages</h1>
          <nav>
            <ul>
              <li>
                <a href={`/download-file`}>Download File</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }