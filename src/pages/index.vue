<script setup lang="ts">
import googleMaps from '@/components/googleMaps.vue';
import RecipeCardR from '../components/RecipeCardR.vue';
import RecipeCardL from '../components/RecipeCardL.vue';
import IconLove from '../components/icons/IconLove.vue';
import file from '@/components/icons/file.vue';
import IngredientsCardL from '@/components/IngredientsCardL.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import type { IngredientsResponse, RecettesResponse } from "@/pocketbase-types";
import { allIngredients, allRecettes } from '@/backend'
const tousLesIngredients: IngredientsResponse[] = await allIngredients();
const toutesLesRecettes: RecettesResponse[] = await allRecettes();


import "swiper/css";
const photos = [
  "photo_1.png",
  "photo_2.png",
  "photo_3.png",
]






</script>
<template>
  <!-- <div class="relative">
    <img class="w-full h-[35vh] object-cover" src="../components/icones/main_couv_header.png" alt="Image">
    <p class="absolute bottom-0 left-0 right-0 text-center pb-4 text-6xl bg-white bg-opacity-50 mx-auto">Exposition</p>
  </div> -->



  <div class="overflow-hidden">
    <Swiper class="mt-20 lg:w-1/2 ">
      <SwiperSlide v-for="photo in photos" :key="photo">
        <img :src="`src/components/imagescar/${photo}`" class="w-screen">
      </SwiperSlide>
    </Swiper>
  </div>

  <div class="flex justify-center">
    <div>
      <svg class="h-6 w-6 text-black">
        <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
          transform="rotate(180 12 12)" />
      </svg>
    </div>
    <div>
      <svg class="h-6 w-6 text-black">
        <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </div>
  </div>


      <div class="flex-1 py-4 flex items-center relative">
        <div class="bg-yellow-300 h-6  absolute left-0 right-0">
          <p class="text-center font-open-sans">
            Lasagne aux légumes - Falafels - Soupe de potirons - Cake au citron 
            <span class="hidden md:inline">- Risotto - Curry de pois chiches - Tacos végétariens </span>
            <span class="hidden lg:inline">- Pizza  - Salade grecque - Poêlée de légumes - Burger végétarien - Pita </span>
          </p>
        </div>
      </div>

  <ul class="flex flex-wrap justify-center md:grid md:grid-cols-3 md:gap-4 font-pt-serif">
    <li v-for="(oneRecette, index) in toutesLesRecettes.slice(0, 2)" :key="oneRecette.id" class="w-full md:w-auto">
      <RouterLink :to="{ name: 'recettes-id', params: { id: oneRecette.id } }">
        <RecipeCardR v-bind="{ ...oneRecette }" />
      </RouterLink>
    </li>
  </ul>






  <div style="display: flex; justify-content: center;">
    <RouterLink to="/allrecettes">
      <button class="
                bg-[#E05303]
                text-white
                rounded-tl-lg rounded-br-lg
                border-t-4 border-b-4 border-[#FFA704]
                px-4 py-1
                hover:bg-[#FFA704]
                hover:border-[#E05303]
                transition-colors duration-300
                mb-2
                font-open-sans
                font-bold
              ">
        Plus de recettes
      </button>
    </RouterLink>
  </div>


    <div class="flex-1 py-4 flex items-center relative">
      <div class="bg-yellow-300 h-6  absolute left-0 right-0">
        <p class="text-center font-open-sans">
          Epinards - Panais - Courge - Fraise - Agrume - Oeuf
          <span class="hidden md:inline">- Produits laitiers - Pomme - Carotte - Poisson - Avocat </span>
          <span class="hidden lg:inline">- Tomate - Poulet - Amande - Chou-fleur - Brocoli - Poire - Fromage</span>
        </p>
      </div>
    </div>

  <div class="flex-1 pt-4 flex items-center relative">
    <div class="bg-[#B3F274] h-10  absolute left-0 right-0">
      <p class="text-center font-pt-serif text-xl">Ingrédients</p>
    </div>
  </div>
  <div class="bg-[#A6DC95]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-pt-serif">

      <!-- faire une boucle pour afficher tous les ingrédients  -->

      <!-- <v-for="(oneIngredient, index) in tousLesIngredients ">
                v-if="index%2 === 0"
    		<const IngredientsCardL = v-bind="{...oneIngredient}">
    	v-else
    		<const IngredientsCardR = v-bind="{...oneIngredient}">
            </v-for> -->


      <IngredientsCardL v-for="(oneIngredient, index) in tousLesIngredients.slice(0, 3)" v-bind="{ ...oneIngredient }"
        :key="index" />
    </div>


    <div style="display: flex; justify-content: center;">
      <RouterLink to="/allingredients">
        <button class="
                mb-2
                bg-[#E05303]
                text-white
                rounded-tl-lg rounded-br-lg
                border-t-4 border-b-4 border-[#FFA704]
                px-4 py-1
                hover:bg-[#FFA704]
                hover:border-[#E05303]
                transition-colors duration-300
                font-open-sans
                font-bold
              ">
          Tous les ingrédients
        </button>
      </RouterLink>
    </div>
  </div>



  <div class="flex flex-col justify-center items-center py-2 font-pt-serif text-center">
    <h6 class="text-xl">Carte interactive</h6>
    <p>Notre carte interactive regroupe tous les magasins et commerces locaux près de chez vous !</p>
    <div class="border-nuance3 lg:w-1/2 w-screen p-15 gap-10">
      <googleMaps />
    </div>
  </div>
</template>