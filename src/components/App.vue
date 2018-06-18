<template>
  <div>
    <Grid />
    <button @click="$store.dispatch('update')">Next</button>
    <button :disabled="$store.state.isPlaying" @click="$store.dispatch('play')">Play</button>
    <button :disabled="!$store.state.isPlaying" @click="$store.dispatch('pause')">Pause</button>
  </div>
</template>

<script>
import Grid from './Grid.vue';

export default {
  components: {
    Grid
  },

  mounted() {
    this.$store.dispatch('init', { sizeX: 50, sizeY: 30 });
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
