import React, { useState } from "react"
import Highlighter from "react-highlight-words"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const textToHighlight =
    "React is a JavaScript library for building user interfaces REACT."

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Highlight Words Example</h1>
      <input
        type="text"
        placeholder="Search term"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      <p>
        <Highlighter
          highlightClassName="highlight"
          searchWords={searchTerm.split(" ")}
          autoEscape={true}
          textToHighlight={textToHighlight}
        />
      </p>
    </div>
  )
}

export default App
