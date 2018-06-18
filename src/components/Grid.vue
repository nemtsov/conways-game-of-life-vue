<template>
  <table :class="$style.grid">
    <tbody>
      <tr v-for="(row, i) in $store.state.grid" :key="i">
        <Cell
          v-for="(cell, j) in row"
          :key="i + '_' + j"
          :isAlive="cell"
          @click="$store.dispatch('toggle', { i, j })"
          />
      </tr>
    </tbody>
  </table>
</template>

<script>
import Cell from './Cell.vue';

export default {
  components: {
    Cell
  }
};
</script>

<style module>
.grid {
  border-collapse: collapse;
}
</style>
