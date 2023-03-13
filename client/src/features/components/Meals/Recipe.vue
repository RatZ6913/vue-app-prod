<template>
  <section id="instructions">
    <h2>Voici la recette</h2>

    <p>{{ attrs.instructions }}</p>

  </section>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs();

</script>

<style lang="scss" scoped>

#instructions {
  margin: 20px auto;
  width: 50%;
  h2 {
    text-align: center;
    color: var(--gray-3);
  }
  p {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 3px 2px 1px 1px var(--gray-3);
    &:hover {
      box-shadow: 3px 2px 1px 1px var(--primary-1);
    }
  }
}

</style>