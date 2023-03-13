<template>
  <section id="container" class="mt-20">
    <h1>Voici les plats classés par pays</h1>
    <p>Envie de voyager, entre les saveurs ? Allez-y faîtes votre choix</p>

    <div id="box-cat">
      <template v-for="zone in state.zones.meals">
        <button @click="state.display = true; state.nameZone = zone.strArea; state.img = false"
          class="btn-cat m-10 btn btn-danger">{{
            zone.strArea }}</button>
      </template>
      <img v-if="state.img" class="mb-20" src="@/assets/images/world.jpg">
    </div>

    <div>
      <Zone v-if="state.display" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { fetchZones } from '@/services/meals.service';
import { provide, reactive, watchEffect } from 'vue';
import Zone from './Zone.vue';

const state = reactive<any>({
  display: false,
  zones: [],
  nameZone: String,
  img: Boolean
})

watchEffect(
  async () => {
    state.zones = await fetchZones();
    state.display = true;
  }
);

provide('statezone', state);

</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  width: 100%;

  h1 {
    color: var(--primary-1);
    font-size: 26px;
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
        color: var(--gray-1);
        background-color: var(--primary-1);
      }

      &:nth-child(even) {
        color: var(--gray-1);
        background-color: var(--primary-2);
      }

      &:nth-child(26n) {
        background-color: var(--gray-1);
        color: var(--danger-1);
        border: 1px solid red;
      }

      &:hover {
        color: var(--gray-1);
        background-color: var(--danger-1);
        font-weight: 700;
      }
    }
  }
}
</style>