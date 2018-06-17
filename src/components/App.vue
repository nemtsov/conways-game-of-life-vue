<template>
  <div>
    <Grid :sizeX="20" :sizeY="20" />
  </div>
</template>

<script>
import Grid from './Grid.vue';

export default {
  components: {
    Grid
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
