<template>
    <section id="container" class="mt-20" v-if="!state.display" @display="display">
      <h1>Voici la liste des plats</h1>
      <p>Quelles plats vous intéresse ? Faîtes votre choix</p>
      <small>Les plats sont listés par lettres</small>

      <section id="box-meals">
        <template v-for="letter in arrLetters">
          <div class="box-by-letters m-20 d-flex justify-content-center flex-column align-items-center">
            <h3>{{ letter.toUpperCase() }}</h3>
            <ul>
              <template v-for="getMealsByLetter in state.results">
                <template v-for="mealByletter in getMealsByLetter">
                  <template v-if="mealByletter.strMeal.charAt(0).toLowerCase() === letter">
                    <li class="idMeals" @click="state.display = true; 
                        state.idMeal = mealByletter.idMeal">
                      {{ mealByletter.strMeal }}
                      <small class="small-cat">({{ mealByletter.strCategory }})</small>
                    </li>
                  </template>
                </template>
              </template>
            </ul>
          </div>
        </template>
      </section>
    </section>

    <section>
      <MealInfo v-if="state.display" @display="display(Boolean())" :idMeal="idMeal"/>
    </section>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { fetchMealsByLetters } from '../../../services/meals.service';
import MealInfo from '@/features/components/Meals/MealInfo.vue';

const arrLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const state = reactive<any>({
  mealsByLetter: [],
  letters: arrLetters,
  results: [],
  display: false,
  idMeal: String
})

watchEffect(() => {
  const fetchMeals = async () => {
    try {
      for (const letter of state.letters) {
        state.mealsByLetter = await fetchMealsByLetters(letter);
        state.results.push(state.mealsByLetter.meals);
        state.idMeal;
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchMeals();
});

function display (value: boolean): void {
  state.display = value;
}

function idMeal(): string {
  return state.idMeal;
}

</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  width: 100%;

  h1 {
    color: brown;
  }

  #box-meals {
    width: 60%;
  }

  .box-by-letters {
    border: var(--border)
  }

  .idMeals {
    text-align: center;
    color: var(--primary-1);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 700;
    }

    .small-cat {
      color: var(--gray-3);
    }
  }
}
</style>