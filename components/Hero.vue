<script lang="ts" setup>
import type { ComponentInstance } from "@uniformdev/canvas";
import type { UniformRichTextNodeProps } from "@uniformdev/canvas-vue";

interface Props {
  title: string;
  text: string;
  richText?: UniformRichTextNodeProps["node"];
  externalRichText?: any;
  component: ComponentInstance;
}

defineProps<Props>();
</script>
<template>
  <div>
    <UniformText
      parameterId="title"
      as="h1"
      class="title"
      placeholder="Insert a title"
    />
    <UniformText
      parameterId="text"
      class="description"
      placeholder="Insert a text"
    />
    <pre>{{ externalRichText }}</pre>
    <UniformRichText
      parameter-id="richText"
      as="div"
      class="description"
      placeholder="Insert a description"
    />
  </div>
</template>

<style scoped>
.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  color: #438fd5;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 1rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}
</style>
