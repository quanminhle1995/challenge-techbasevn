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
export default class AppCovid extends Vue {
  created() {
    console.log("ok");
  }
}
</script>

<style lang="scss" scope>
.header {
  height: 10%;
}
.content {
  padding-top: 10px;
  height: 90%;
}
</style>
