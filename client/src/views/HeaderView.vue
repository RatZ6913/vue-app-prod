<template>
  <header>
    <nav class="d-flex justify-content-space-between mr-20 align-items-center">
      <div>
        <img class="ml-20" src="@/assets/images/logo.jpg" alt="Logo">
      </div>
      <ul class="d-flex">
        <li class="nav-menu m-10" 
          :class="{ active: page === 'HomeView' }"
          @click="emit('navigate', 'HomeView')">Home</li>
        <li class="nav-menu m-10" 
          :class="{ active: page === 'Categories' }"
          @click="emit('navigate', 'Categories')">Categories</li>
        <li class="nav-menu m-10" 
          :class="{ active: page === 'Zones' }"
          @click="emit('navigate', 'Zones')">Zones</li>
        <li class="nav-menu m-10" 
          :class="{ active: page === 'Meals' }"
          @click="emit('navigate', 'Meals')">Meals</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { Page } from '@/interfaces/type';
import { defineEmits, reactive } from 'vue';

const state = reactive<{
    open: boolean;
}>({
    open: false
});

defineProps<{
    page: Page;
}>();

const emit = defineEmits<{
    (e: 'navigate', page: Page): void;
}>();

</script>


<style scoped lang="scss">
nav {
  background-color: var(--gray-3);
  width: 100%;

  img {
    border-radius: 50px;
    width: 100px;
    height: 100px;
  }

  a {
    color: var(--gray-1);
  }

  .nav-menu {
    color: white;
    cursor: pointer;
  }
}
</style>
