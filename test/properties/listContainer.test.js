import Vuetify from "vuetify";
import Vuex from "vuex";
import "../test.setup";
import { createLocalVue, mount } from "@vue/test-utils";
import ListContainerComponent from "@/components/properties/listContainer.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Properties", () => {
  describe("List container component", () => {
    let vuetify;
    let store;

    const createComponent = (props) => {
      return mount(ListContainerComponent, {
        localVue,
        vuetify,
        propsData: props,
        store,
        stubs: {
          transition: true,
        },
      });
    };

    beforeEach(() => {
      vuetify = new Vuetify();
    });

    test("render component to the screen", async () => {
      store = new Vuex.Store({
        modules: {
          properties: {
            namespaced: true,
            actions: {
              getProperties: jest.fn(),
            },
            mutations: {
              setProperties: jest.fn(),
            },
            state: {
              properties: [],
            },
            getters: {
              listProperties: jest.fn(),
              listPropertiesById: jest.fn(),
              listZapProperties: jest.fn(),
            },
          },
          screen: {
            namespaced: true,
            actions: {
              blockScreen: jest.fn(),
              unblockScreen: jest.fn(),
            },
            mutations: {
              setBlocked: jest.fn(),
            },
            state: {
              blocked: false,
            },
            getters: {
              isBlockedScreen: jest.fn(() => false),
            },
          },
        },
      });
      const consoleSpy = jest.spyOn(console, "warn");
      const testProps = {
        selectedPortal: {
          color: "grey lighten-5",
          logo: "/logo-zap.png",
          name: "Zap",
          slug: "zap",
        },
      };
      const wrapper = createComponent(testProps);
      await wrapper.vm.$nextTick();

      expect(wrapper.html()).toContain("Filtrar imóveis");
      expect(wrapper.findComponent({ name: "v-pagination" })).toBeTruthy();
    });
  });
});
