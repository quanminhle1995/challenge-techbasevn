<template src="./Info.html" />
<script lang="ts">
import { computed, watchEffect } from "vue";
import Base from "../Base/Base";
import { ActionTypes } from "../../../store/action";
import DataService from "@/service/data.service";
export default class Info extends Base {
  loading = true;
  selectCountry = computed(() => this.store.getters.getSelectedCountry);
  dataByCountry = computed(() => {
    this.loading = false;
    return this.store.getters.getDataByCountry.sort(() => -1);
  });
  selectDate = new Date();
  selectRow = null;
  created() {
    DataService.getLoading.subscribe(result => {
      this.loading = result;
    });
    watchEffect(() => {
      this.store.dispatch(ActionTypes.GET_DATA_BY_COUNTRY);
    });
  }
}
</script>
