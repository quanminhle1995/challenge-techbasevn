import { GetterTree } from "vuex";
import { State } from "./state";
export const getters: GetterTree<State, State> = {
  getCountries: (state) => {
    return state.countries;
  },
  getSelectedCountry: (state) => {
    return state.selectedCountry;
  },
  getDataByCountry: (state) => {
    return state.dataByCountry;
  }
}