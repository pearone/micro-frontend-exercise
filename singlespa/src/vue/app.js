import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import Hello from "./hello.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    el: "#vue",
    render: () => h(Hello),
  },
});

export const bootstrap = vueLifecycles.bootstrap;

export const mount = vueLifecycles.mount;

export const unmount = vueLifecycles.unmount;
