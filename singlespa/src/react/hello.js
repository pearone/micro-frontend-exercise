import React, { useState } from "react";
import { registerApplication } from "single-spa";

const App = () => {
  console.log("render react");
  const [is_vue_dom_show, showVueDom] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          showVueDom(!is_vue_dom_show);
        }}
      >
        show vue
      </button>
      {is_vue_dom_show && <div id="part_vue"></div>}
      <div>Hello from React</div>
    </div>
  );
};

// registerApplication(
//   "part_vue",
//   () => import("../vue/app"),
//   () => location.pathname.startsWith("/react")
// );

export default App;
