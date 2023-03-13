<template>
  <section id="container" class="d-flex flex-column">
    <input v-model="state.search" class="mt-10" placeholder="Rechercher un plat">
    <div id="content-meals" class="m-10">
      <template v-for="searchMeal in state.meals">
        <template v-for="showMeal in searchMeal">
          <small>{{ showMeal.strMeal }}</small>
        </template>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { fetchMealsByLetters } from '../services/meals.service';

const state = reactive<any>({
  search: '',
  meals: [],
})

watch(() => state.search, async (letters) => {
  state.meals = await fetchMealsByLetters(letters);
});

</script>

<style lang="scss" scoped>
#content-meals {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 90%;

  small {
    list-style: none;
    font-size: 14px;
    margin-left: 10px;
    color: var(--primary-1);
    &:hover {
      font-weight: 700;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>