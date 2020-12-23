<template src="./Countries.html" />
<script lang="ts">
import Base from "@/components/AppCovid/Base/Base.ts";
import { ICountry } from "@/interface/ICountry";
import { computed } from "vue";
import { ActionTypes } from "@/store/action";
import { MutationTypes } from "@/store/mutations";
export default class Countries extends Base {
  protected keySearch = "";
  protected selectCountry: ICountry = {
    country: "",
    iso2: "",
    slug: "",
  };
  protected loading = true;
  protected searchCountries = computed(() => {
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
<style lang="scss">
.table-countries {
  .p-datatable-header {
    text-align: center;
    font-weight: bold;
  }
  .p-datatable-wrapper {
    table {
      thead tr th {
        display: none;
      }
      tbody tr td {
        text-align: center;
      }
    }
  }
}
</style>
