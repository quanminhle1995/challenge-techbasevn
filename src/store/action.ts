import { Status } from "@/enum/status.enum";
import { ICountry } from "@/interface/ICountry";
import DataService from "@/service/data.service";
import { ActionTree } from "vuex";
import { MutationTypes } from "./mutations";
import { State } from "./state";
export enum ActionTypes {
  GET_COUNTRIES = "GET_COUNTRIES",
  GET_CASES = "GET_CASES",
  GET_DATA_BY_COUNTRY = "GET_DATA_BY_COUNTRY"
}


export const actions: ActionTree<State, State>  = {
  [ActionTypes.GET_COUNTRIES]() {
    DataService.getCountries().subscribe((result: ICountry[]) => {
      this.commit(MutationTypes.SET_COUNTRIES, result);
    });
  },
  [ActionTypes.GET_DATA_BY_COUNTRY]() {
    const country = this.state.selectedCountry;
    DataService.getDataByCountry(country.slug || '').subscribe((result: ICountry[]) => {
      this.commit(MutationTypes.SET_DATA_BY_COUNTRY, result);
    })
  }
}