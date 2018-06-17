<template>
  <td 
    @click="$emit('click', $event)"
    :class="[$style.cell, {[$style.cellAlive]: isAlive}]"
    />
</template>

<script>
export default {
  props: {
    isAlive: Boolean,
    required: true
  }
};
</script>

<style module>
.cell {
  border: 1px solid #ddd;
  cursor: pointer;
  height: 15px;
  width: 15px;
  transition: background-color 0.5s ease;
}

.cellAlive {
  background: black;
}
</style>
