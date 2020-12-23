import { createStore } from "vuex";
import { actions } from "./action";
import {state} from "./state";
import { mutations } from "./mutations";
import { getters } from "./getters";
export default createStore({
  state,
  mutations,
  actions,
  getters
});