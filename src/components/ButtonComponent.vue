<template>
  <button class="shop-btn" :style="{ backgroundColor: color }" @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: '#3bb77e'
  }
})

const emit = defineEmits(['click']) // emit a click event

const handleClick = () => {
  emit('click') // forward the click to parent
}
</script>

<style scoped>
.shop-btn {
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.shop-btn:hover {
  opacity: 0.85;
}
</style>