import Vuetify from "vuetify";
import "./test.setup";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import BrandCardComponent from "@/components/home/brandCard.vue";

const localVue = createLocalVue();

describe("Brand Card component", () => {
  let vuetify;

  const createComponent = (props) => {
    return mount(BrandCardComponent, {
      localVue,
      vuetify,
      propsData: props,
      stubs: {
        transition: true,
        NuxtLink: RouterLinkStub,
      },
    });
  };

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test("render component to the screen", async () => {
    const consoleSpy = jest.spyOn(console, "warn");
    const testProps = {
      logoImage: "path/to/image.jpg",
      destination: "link/to/destination",
      cardBackround: "vivaRealBlue",
    };

    const wrapper = createComponent(testProps);
    await wrapper.vm.$nextTick();

    const component = wrapper.findComponent({ name: "home-brand-card" });
    expect(component).toBeTruthy();
    expect(component.html()).toContain("vivaRealBlue");
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
