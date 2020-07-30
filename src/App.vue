<template>
  <div id="app">
    <home />
    <about />
    <index />
  </div>
</template>
<script>
import home from "./views/Home";
import about from "./views/About";
import index from "./components/index";
export default {
  name: "App",
  components: {
    home,
    about,
    index,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scope>
</style>
