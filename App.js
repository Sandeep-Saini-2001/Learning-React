/**
 * <div id="parent">
 *     <div id="child1">
 *          <h1>This is first heading of child1</h1>
 *          <h2>This is Second heading of child1</h2>
 *     </div>
 *     <div id="child2">
 *          <h1>This is first heading of child2</h1>
 *          <h2>This is Second heading of child2</h2>
 *     </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is first heading of child1"),
    React.createElement("h1", {}, "This is second heading of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is first heading of child2"),
    React.createElement("h1", {}, "This is second heading of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)