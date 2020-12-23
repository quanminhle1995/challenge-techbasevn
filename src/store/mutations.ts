import { ICountry } from "@/interface/ICountry"
import { MutationTree } from "vuex";
import { State } from "./state"

export enum MutationTypes {
  SET_COUNTRIES = "SET_COUNTRIES",
  SET_SELECTED_COUNTRY = "SET_SELECTED_COUNTRY",
  SET_DATA_BY_COUNTRY = "SET_DATA_BY_COUNTRY"
}
export const mutations: MutationTree<State> = {
  [MutationTypes.SET_COUNTRIES](state: State, payload: ICountry[]) {
    state.countries = payload;
  },
  [MutationTypes.SET_SELECTED_COUNTRY](state: State, payload: ICountry) {
    state.selectedCountry = payload;
  },
  [MutationTypes.SET_DATA_BY_COUNTRY](state: State, payload: ICountry[]) {
    state.dataByCountry = payload;
  }
}