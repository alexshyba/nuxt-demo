import {
  DefaultNotImplementedComponent,
  type ResolveRenderer,
} from "@uniformdev/canvas-vue";
import Page from "./Page.vue";
import Hero from "./Hero.vue";
import WhyAttend from "./WhyAttend.vue";
// register your new components here
const componentMap = {
  hero: Hero,
  whyattend: WhyAttend,
  page: Page,
};

export const resolveRenderer: ResolveRenderer = (component) => {
  return (
    componentMap[component.type as keyof typeof componentMap] ??
    DefaultNotImplementedComponent
  );
};
