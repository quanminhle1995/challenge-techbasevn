<template>
  <div class="p-grid">
    <div class="p-xl-1 p-lg-1 p-md-1 p-col-12"></div>
    <div class="p-xl-3 p-lg-3 p-md-3 p-col-12">
      <Countries />
    </div>
    <div class="p-xl-7 p-lg-7 p-md-7 p-col-12">
      <Info />
    </div>
    <div class="p-xl-1 p-lg-1 p-md-1 p-col-12"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Dasboard extends Vue {}
</script>
