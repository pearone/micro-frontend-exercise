import { registerApplication, start } from "single-spa";

registerApplication(
  "react",
  () => import("./src/react/app.js"),
  () => {
    console.log("react path:", location.pathname);
    return location.pathname.startsWith("/react");
  }
);

registerApplication(
  "vue",
  () => import("./src/vue/app.js"),
  () => location.pathname.startsWith("/vue")
);

start();
