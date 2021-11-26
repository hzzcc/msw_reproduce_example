import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("render");
  React.useEffect(() => {
    fetch("/user")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("resp: ", resp);
      });
  }, []);

  const srcDoc = `!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>root,html,body{width:100%;height:100%;margin:0;padding:0;overflow:hidden;}</style>
    </head>
    <body>
    <script>
      fetch("/user").then((resp) => resp.json())
      .then((resp) => {
        console.log("request in frame: ", resp);
      }).catch((err) =>{
        console.error("request in frame error::", err);
      });
    </script>
    </body>
  </html>`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <iframe title="frame" srcDoc={srcDoc} />
      </header>
    </div>
  );
}

export default App;
