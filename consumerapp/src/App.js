import "./App.css";
import React from "react";

const ComponentOne = React.lazy(() => import("firstApp/firstApp"));
const ComponentTwo = React.lazy(() => import("secondApp/secondApp"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading Button">
        <ComponentOne />
        <ComponentTwo />
      </React.Suspense>
    </div>
  );
}

export default App;
