<script setup lang="ts">
import type { IngredientsResponse } from '@/pocketbase-types'
import {pb} from '@/backend'
const props: IngredientsResponse = defineProps<IngredientsResponse>()
const urlImage = pb.files.getUrl(props, props.ingredients_img, { thumb: '100x200' })
</script>

<template>
      <div class="flex py-8 mx-12">
        <div class="flex flex-col justify-between items-center flex-grow relative px-[11px] py-[19px] rounded-tl-[10px] rounded-bl-[10px] bg-[#242D3E] text-white">
          <p class="flex-grow-0 flex-shrink-0 w-[69px] text-[18.58974266052246px] text-left">
            
            {{ nom }}
          </p>
          <p class="flex-grow-0 flex-shrink-0 w-16 text-[13.942306518554688px] text-left">
            Prix : {{ prix }}€/kg 
          </p>
          <p class="flex-grow-0 flex-shrink-0 underline w-20 text-[9.05155086517334px] font-bold text-left">
            Ajouter au panier
          </p>
        </div>
        <div class="w-1/2 flex">
          <div class="flex-grow">
            <img :src="urlImage" class="h-full rounded-tr-[10.59px] rounded-br-[10.59px] object-cover" />
          </div>
        </div>
      </div>
</template>