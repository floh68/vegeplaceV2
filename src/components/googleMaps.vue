<template>
  <GoogleMap
  api-key="AIzaSyChXK5Iz8zTGhMk3hr0-BTzNjiLb42Snwo"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="12"
  >
  <Marker :options="{ position: center }" />
  </GoogleMap>
 </template>
 
 <script setup lang="ts">
 import { GoogleMap, Marker } from 'vue3-google-map'
 
 const center = { lat: 47.49566525144965, lng: 6.805222081286718 }
 </script>