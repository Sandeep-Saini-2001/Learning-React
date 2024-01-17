import React from "react"
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Finally we setup a react in our app"),
    React.createElement("h1", {}, "This is second heading of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is first heading of child2"),
    React.createElement("h1", {}, "This is second heading of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)