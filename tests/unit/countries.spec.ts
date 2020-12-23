import { mount } from "@vue/test-utils";
import Countries from "@/components/AppCovid/Countries/Countries.vue";
describe("Countries.vue", () => {
  test("convertDate", () => {
    const countries = mount(Countries);
    expect(countries.vm.searchCountries).toBeTruthy();
  });
});
