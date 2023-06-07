<script setup lang="ts">
import IconLove from './icons/IconLove.vue';
import file from './icons/file.vue'
import { pb, oneRecette } from '@/backend'
import type { RecettesResponse } from '@/pocketbase-types'
const props: RecettesResponse = defineProps<RecettesResponse>()

//@ts-ignore
const lesIngredients = props.expand?.["ingredients(nom)"];

const urlImage = pb.files.getUrl(props, props.photo, { thumb: '100x200' })

</script>
<template>
    <div class="mt-16">
        <div class="flex justify-center items-center m-4 p-4">
            <img :src="urlImage" class="rounded-lg  md:w-1/4 lg:w-1/3 xl:w-1/3" alt="">
        </div>
        <div class="text-center">
            <h2 class="font-bold text-2xl font-ramaraja">{{ nom }}</h2>
            <p class="font-open-sans">{{ prix }}€</p>
                <div class="grid grid-cols-3 m-4 lg:w-1/2 lg:mx-auto">
                    <button class="col-span-2 bg-yellow-500 text-white py-2 px-4 lg:mx-6 rounded-lg font-open-sans">
                        Ajouter au panier
                    </button>
                     <div class="flex justify-center items-center col-span-1 p-2">
                        <IconLove :class="{ 'fill-red-400': favori }"/>
                    </div>
                </div>
            </div>
        <p class="px-6 pb-6 lg:w-1/2 lg:mx-auto font-open-sans">Recette disponible en intégralitée après achat.
            Vous pouvez retrouver ci dessous le contenu de la
            recette avec les ingrédients et étapes regroupées dans une fiche recette (accessible à l’achat ) ainsi qu’une vidéo
            de réalisation de la recette ( accessible à l’achat ).
            Les ingrédients sont compris dans l’achat de la recette mais ce ne sont pas des produits frais du jour.</p>
        <h2 class="text-center font-bold text-xl font-pt-serif">Ingrédients</h2>
        <!-- <ul class="px-6 pb-6 lg:w-1/2 lg:mx-auto">
            <li>150g farine</li>
            <li>100g sucre</li>
            <li>2 oeufs...</li>
        </ul> -->
        <!-- boucle avec les ingrédients à la place  -->
        <!-- <ul class="px-6 pb-6 lg:w-1/2 lg:mx-auto">
            </ul> -->
        <!-- <div class="px-6 pb-6 lg:w-1/2 lg:mx-auto ">{{ liste_ingredients }}</div> -->
        <div v-for="ingredients in lesIngredients">
            {{ ingredients.nom }}
        </div>
        <!-- <div v-for="ingredient in lesIngredients" >
                  {{ ingredients.nom }}
              </div> -->
        <h2 class="text-center font-bold font-open-sans text-xl">Recette</h2>
        <a href="chemin-vers-votre-fichier.pdf" download class="flex px-6 items-center underline font-bold lg:w-1/2 lg:mx-auto">
            <file />
            <p class="px-6 font-open-sans">Télécharger la recette (PDF)</p>
        </a>
        
        
        
        
        <div class="flex justify-center">
        <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/4 m-4">
            <div class="aspect-w-16 aspect-h-9 md:aspect-h-16">
                <iframe class="w-full h-full" :src="Url" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
        </div>
    </div>

</template>