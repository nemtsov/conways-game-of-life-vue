<template>
  <table :class="$style.grid">
    <tbody>
      <tr v-for="(row, i) in grid" :key="i" :class="$style.row">
        <Cell
          v-for="(cell, j) in row"
          :key="i + '_' + j"
          :isAlive="cell"
          @click="$set(grid[i], j, !grid[i][j])"
          />
      </tr>
    </tbody>
  </table>
</template>

<script>
import Cell from './Cell.vue';

function createGrid(sizeX, sizeY) {
  const grid = [];
  for (let i = 0; i < sizeY; i++) {
    const row = [];
    for (let j = 0; j < sizeX; j++) row.push(false);
    grid.push(row);
  }
  return grid;
}

function cloneGrid(grid) {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      newGrid[i][j] = grid[i][j];
    }
  }
  return newGrid;
}

export default {
  components: {
    Cell
  },

  props: {
    sizeX: { type: Number, required: true },
    sizeY: { type: Number, required: true }
  },

  data() {
    return {
      grid: createGrid(this.sizeX, this.sizeY),
      nextGrid: createGrid(this.sizeX, this.sizeY)
    };
  },

  mounted() {
    setInterval(() => this.update(), 1000);
  },

  methods: {
    update() {
      for (let i = 0; i < this.sizeX; i++) {
        for (let j = 0; j < this.sizeY; j++) {
          const isLiving = this.grid[i][j];
          const numLiving = this.getLivingNeighbors(i, j);

          let result = false;
          if (isLiving && numLiving < 2) {
            result = false;
          }
          if (isLiving && (numLiving === 2 || numLiving == 3)) {
            result = true;
          }
          if (isLiving && numLiving > 3) {
            result = false;
          }
          if (!isLiving && numLiving === 3) {
            result = true;
          }

          this.$set(this.nextGrid[i], j, result);
        }
      }

      this.grid = cloneGrid(this.nextGrid);
    },

    getLivingNeighbors(x, y) {
      let count = 0;

      // Check cell on the right.
      if (x != this.sizeX - 1) if (this.grid[x + 1][y]) count++;

      // Check cell on the bottom right.
      if (x != this.sizeX - 1 && y != this.sizeY - 1)
        if (this.grid[x + 1][y + 1]) count++;

      // Check cell on the bottom.
      if (y != this.sizeX - 1) if (this.grid[x][y + 1]) count++;

      // Check cell on the bottom left.
      if (x != 0 && y != this.sizeY - 1) if (this.grid[x - 1][y + 1]) count++;

      // Check cell on the left.
      if (x != 0) if (this.grid[x - 1][y]) count++;

      // Check cell on the top left.
      if (x != 0 && y != 0) if (this.grid[x - 1][y - 1]) count++;

      // Check cell on the top.
      if (y != 0) if (this.grid[x][y - 1]) count++;

      // Check cell on the top right.
      if (x != this.sizeX - 1 && y != 0) if (this.grid[x + 1][y - 1]) count++;

      return count;
    }
  }
};
</script>

<style module>
.grid {
  border-collapse: collapse;
}

.row {
}
</style>
