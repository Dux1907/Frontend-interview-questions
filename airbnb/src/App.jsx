import { useState } from "react";

import "./App.css";

function App() {
  const [active, setActive] = useState("HTML");
  const object1 = [
    {
      label: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      label: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      label: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];
  return (
    <>
      {object1.map((val) => (
        <button
          key={val.label}
          onClick={() => setActive(val.label)}
          className={val.label == active && "active1"}
        >
          {val.label}
        </button>
      ))}
      {object1.map(
        (val) => active == val.label && <p key={val.label}>{val.content}</p>
      )}
    </>
  );
}

export default App;
