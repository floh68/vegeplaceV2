<script setup lang="ts">
import IconFacebook from '@/components/icons/IconFacebook.vue'
import type { RecettesResponse } from '@/pocketbase-types'
import { pb, oneRecette } from '@/backend'
const props: RecettesResponse = defineProps<RecettesResponse>()
const urlImage = pb.files.getUrl(props, props.photo, { thumb: '100x200' })
</script>

<template>
  <div class="flex py-8 mx-12">
    <div class="w-1/2">
      <img :src="urlImage" class="w-full h-full rounded-tl-[10.59px] rounded-bl-[10.59px] object-cover" />
    </div>
    <div class="flex flex-col justify-between items-center flex-grow relative px-[11px] py-[19px] rounded-tr-[10px] rounded-br-[10px] bg-[#f29f05]">
      <p class="flex-grow-0 flex-shrink-0 w-[69px] text-[18.58974266052246px] text-left text-black">
        {{ nom }}
      </p>
      <p class="flex-grow-0 flex-shrink-0 w-16 text-[13.942306518554688px] text-left text-black">
        Prix : {{ prix }} € 
      </p>
      <p class="flex-grow-0 underline flex-shrink-0 w-20 text-[9.05155086517334px] font-bold text-left text-black">
        Voir la recette
      </p>
    </div>
  </div>



</template>