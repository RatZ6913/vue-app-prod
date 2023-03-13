<template>
  <section id="container" class="mt-20 d-flex flex-column align-items-center">
    <Transition appear name="title">
      <h1>Bienvenue, sur <strong>Meals</strong></h1>
    </Transition>

    <Transition appear name="text">
      <p>Ici, vous trouveriez tous types de repas</p>
    </Transition>

    <Transition appear name="float">
      <div id="content" class="d-flex flex-column align-items-center justify-content-center">
        <p>Envie de découvrir de nouvelles saveurs ? </p>
        <p>Alors, venez visiter nos recettes !</p>
      </div>
    </Transition>

    <div class="box-random mt-20 p-20">
      <h2>Générér un plat aléatoire</h2>
      <button @click="random" class="btn">Cliquez ici</button>
      <template v-for="randomMeal in state.meals.meals">
        <span class="mt-20">Plat : </span>
        <p>{{ randomMeal.strMeal }}</p>
        <img :src="randomMeal.strMealThumb">
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fetchRandomMeal } from '../services/meals.service';
import { reactive } from 'vue';

const state = reactive<any>({
  meals: [],
  random: false
})

async function random() {
  state.meals = await fetchRandomMeal();
  state.random = true;
}

</script>

<style scoped lang="scss">
#container {
  background-color: var(--gray-1);
  width: 100%;
  margin: auto;

  h1 {
    color: var(--primary-1);
    font-size: 32px;
  }

  .box-random {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background-color: var(--gray-2);
    color: var(--primary-1);
    margin-bottom: 20px;
    box-shadow: 3px 2px 1px 1px var(--gray-3);
    border-radius: 15px;

    &:hover {
      box-shadow: 3px 2px 1px 1px var(--primary-1);
    }

    span {
      color: var(--gray-3);
    }

    .btn {
      margin: auto;
      width: 50%;
      margin-top: 20px;

      &:hover {
        background-color: var(--gray-3);
        color: var(--gray-1);
      }
    }

    img {
      width: 30rem;
      height: 30rem;
    }
  }

  #content {
    background-image: url('@/assets/images/bg-image.jpg');
    background-size: cover;
    width: 50%;
    height: 50vh;
    box-shadow: 1px 2px 3px var(--primary-1);

    p {
      text-align: center;
      border: none;
      width: 80%;
      margin: 0;
      background-color: #ffffffd3;
      color: var(--gray-3);
      padding: 20px;
    }
  }

  .text-enter-from,
  .title-enter-from {
    translate: -40%;
    opacity: 0;
  }

  .float-enter-from {
    transform: translateX(-40%);
    opacity: 0;
  }

  .text-enter-to,
  .title-enter-to {
    translate: 0px;
    opacity: 1;
  }

  .float-enter-to {
    transform: translateX(0%);
  }

  .float-enter-active,
  .text-enter-active,
  .title-enter-active {
    transition: 1.5s;
  }

  .text-enter-active {
    transition-delay: 0.5s;
  }

  .float-enter-active {
    transition-delay: 1s;
  }
}
</style>