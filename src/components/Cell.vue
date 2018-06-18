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
  border: 1px solid #d0cfd6;
  cursor: pointer;
  height: 15px;
  width: 15px;
}

.cellAlive {
  border-color: #414350;
  background: #121744;
}
</style>
