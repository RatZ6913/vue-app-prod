<template>
  <section id="container" class="mt-20">
    <h2>Voici les différents catégories : </h2>
    <p>Choisissez le type de plat qui vous convient</p>

    <div id="box-cat">
      <template v-for="category in state.category.meals">
        <button @click="state.display = true; state.nameCat = category.strCategory; state.img = false"
          class="btn-cat m-10 btn btn-primary">{{ category.strCategory }}</button>
      </template>
      <img v-if="state.img" class="mb-20" src="@/assets/images/category.jpg">
    </div>

    <div>
      <Category v-if="state.display" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { provide, reactive, watchEffect } from 'vue';
import { fetchMealsCategory } from '../../../services/meals.service';
import Category from './Category.vue';

export interface CategoriesInterface {
  nameCat: string;
}

const state = reactive<any>({
  display: false,
  category: [],
  nameCat: String,
  img: Boolean
})

watchEffect(
  async () => {
    state.category = await fetchMealsCategory();
    state.display = true;
  }
);

provide('stateCategories', state);
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  width: 100%;

  h2 {
    color: brown;
    font-size: 24px;
  }
}

#box-cat {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  background-color: var(--gray-2);

  .btn-cat {
    width: 250px;
    box-shadow: 1px 2px 1px var(--gray-1);

    &:nth-child(odd) {
      background-color: var(--danger-1);
    }

    &:nth-child(even) {
      background-color: var(--danger-2);
    }

    &:last-child {
      background-color: var(--danger-1);
    }

    &:hover {
      background-color: var(--gray-3);
      font-weight: 700;
    }
  }
}
</style>
