<template src="./Countries.html" />
<script lang="ts">
import Base from "@/components/AppCovid/Base/Base.ts";
import { ICountry } from "@/interface/ICountry";
import { computed } from "vue";
import { ActionTypes } from "@/store/action";
import { MutationTypes } from "@/store/mutations";
export default class Countries extends Base {
  public keySearch = "";
  public selectCountry: ICountry = {
    country: "",
    iso2: "",
    slug: ""
  };
  public loading = true;
  public searchCountries = computed(() => {
    return () => {
      return this.store.getters.getCountries.filter((country: any) => {
        this.loading = false;
        return country.country
          .toLocaleLowerCase()
          .includes(this.keySearch.toLocaleLowerCase());
      });
    };
  });
  mounted() {
    this.store.dispatch(ActionTypes.GET_COUNTRIES);
  }
  onRowSelect() {
    this.store.commit(MutationTypes.SET_SELECTED_COUNTRY, this.selectCountry);
  }
}
</script>
