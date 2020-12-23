import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
@Options({})
export default class Base extends Vue {
  public store = useStore();
  convertDate(date: any) {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${year}-${month.toString().length === 1 ? `0${month}` : `${month}`}-${day.toString().length === 1 ? `0${day}` : `${day}`}`;
  }
}