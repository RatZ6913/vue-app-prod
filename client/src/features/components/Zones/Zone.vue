<template>
  <section id="zone" class="mt-20">
    <template v-for="mealsDatas in state.meals">
      <h2>Voici les plats du pays :
        <span class="country">{{ state.stateZones.nameZone }}</span>
      </h2>
      <template v-for="meals in mealsDatas">
        <article>
          <p>{{ meals.strMeal }}</p>
          <img :src="meals.strMealThumb">
        </article>
      </template>
    </template>
  </section>
</template>

<script setup lang="ts">
import { fetchMealsByCountry } from '@/services/meals.service';
import { inject, reactive, watch } from 'vue';

const stateZones = inject('statezone');

const state = reactive<any>({
  meals: [],
  stateZones: stateZones,
})

watch(
  () => state.stateZones.nameZone,
  async (newValue) => {
    state.meals = await fetchMealsByCountry(newValue);
  }
)

</script>

<style lang="scss" scoped>

#zone {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  h2 {
    width: 100%;
    text-align: center;
    .country {
      color: var(--primary-2);
    }
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 20px;
    padding: 20px;
    background-color: var(--gray-2);
    min-width: 250px;
    min-height: 250px;
    text-align: center;
    color: var(--primary-2);
    font-weight: 700;
    background-color: #f5deb39f;

    img {
      padding: 10px;
      background-color: white;
    }
  }
}
</style>
