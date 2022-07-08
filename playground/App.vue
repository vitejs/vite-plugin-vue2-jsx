<script>
import TestJsx from './TestJsx.tsx'
import TestJsxSFC from './TestJsxSFC.vue'
// import TestDecorator from './TestDecorator.tsx'
export default {
  name: 'App',
  components: {
    TestJsx,
    TestJsxSFC,
    // TestDecorator,
  },
}
</script>

<template>
  <div>
    <h1>Vite-Plugin-Vue2-JSX Playground</h1>
    <TestJsx />
    <TestJsxSFC />
    <TestDecorator />
  </div>
</template>
