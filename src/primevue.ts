import "primevue/resources/themes/mdc-light-indigo/theme.css"
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toolbar from 'primevue/toolbar';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Calendar from "primevue/calendar";

export default [
  {
    name: "Button",
    component: Button
  },
  {
    name: "InputText",
    component: InputText
  },
  {
    name: "Toolbar",
    component: Toolbar
  },
  {
    name: "DataTable",
    component: DataTable
  },
  {
    name: "Column",
    component: Column
  },
  {
    name: "ColumnGroup",
    component: ColumnGroup
  },
  {
    name: "Calendar",
    component: Calendar 
  }
];
