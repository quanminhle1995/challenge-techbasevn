import { mount } from "@vue/test-utils";
import Base from "@/components/AppCovid/Base/Base";
describe("Base.ts", () => {
  test("convertDate", () => {
    const base = mount(Base);
    const date = new Date();
    expect(base.vm.convertDate(date)).toBeTruthy();
  });
});
