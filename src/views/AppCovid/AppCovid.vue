<template>
  <div class="header">
    <Header />
  </div>
  <div class="content">
    <Content>
      <router-view />
    </Content>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class AppCovid extends Vue {}
</script>
<style lang="scss" src="./AppCovid.scss" scope />
