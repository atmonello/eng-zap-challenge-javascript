import Vuetify from "vuetify";
import Vuex from "vuex";
import "./test.setup";
import { createLocalVue, mount } from "@vue/test-utils";
import ThemeSwitcher from "@/components/shared/themeSwitch.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ThemeSwitcher component", () => {
  let vuetify;
  let store;

  const createComponent = ({ theme = false }) => {
    return mount(ThemeSwitcher, {
      localVue,
      vuetify,
      store,
      mocks: {
        $nuxt: {
          $vuetify: { theme: { dark: theme } },
        },
      },
    });
  };

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test("render component to the screen", async () => {
    store = new Vuex.Store({
      modules: {
        screen: {
          namespaced: true,
          actions: {
            setLightTheme: jest.fn(),
            setDarkTheme: jest.fn(),
          },
          mutations: {
            setTheme: jest.fn(),
          },
          state: {
            theme: "light",
          },
          getters: {
            isDarkTheme: jest.fn(),
            isLightTheme: jest.fn(),
          },
        },
      },
    });
    const wrapper = createComponent({ theme: false });
    await wrapper.vm.$nextTick();

    expect(
      wrapper.findAllComponents({
        name: "theme-switcher",
      })
    ).toHaveLength(1);
  });

  test("change theme to dark", async () => {
    store = new Vuex.Store({
      modules: {
        screen: {
          namespaced: true,
          actions: {
            setLightTheme: jest.fn(),
            setDarkTheme: jest.fn(),
          },
          mutations: {
            setTheme: jest.fn(),
          },
          state: {
            theme: "light",
          },
          getters: {
            isDarkTheme: jest.fn(),
            isLightTheme: jest.fn(),
          },
        },
      },
    });
    const wrapper = createComponent({ theme: false });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$data.isDark).toBe(false);

    await wrapper.find("input").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$data.isDark).toBe(true);
  });

  test("change theme to light", async () => {
    store = new Vuex.Store({
      modules: {
        screen: {
          namespaced: true,
          actions: {
            setLightTheme: jest.fn(),
            setDarkTheme: jest.fn(),
          },
          mutations: {
            setTheme: jest.fn(),
          },
          state: {
            theme: "light",
          },
          getters: {
            isDarkTheme: jest.fn(),
            isLightTheme: jest.fn(),
          },
        },
      },
    });
    const wrapper = createComponent({ theme: true });
    wrapper.setData({ isDark: true });

    await wrapper.vm.$nextTick();
    await wrapper.find("input").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$data.isDark).toBe(false);
  });
});
