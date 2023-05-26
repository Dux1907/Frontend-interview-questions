import { useState } from "react";

import "./App.css";

function App() {
  const [active, setActive] = useState("HTML");
  return (
    <>
      <button onClick={() => setActive("HTML")} className = {active == 'HTML' && 'active'}>HTML</button>
      <button onClick={() => setActive("CSS")} className = {active == 'CSS' && 'active'}>CSS</button>
      <button onClick={() => setActive("JavaScript")} className = {active == 'JavaScript' && 'active'}>JavaScript</button>
      {active == "HTML" && (
        <p>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
      )}

      {active == "CSS" && (
        <p>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
      )}
      {active == "JavaScript" && (
        <p>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </p>
      )}
    </>
  );
}

export default App;
