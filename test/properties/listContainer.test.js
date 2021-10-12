import Vuetify from "vuetify";
import Vuex from "vuex";
import "../test.setup";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import ListContainerComponent from "@/components/properties/listContainer.vue";
import {
  PropertiesByIdMock,
  PropertiesMock,
  VivaPropertiesMock,
  ZapPropertiesMock,
} from "@/test/mocks/properties";

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
          NuxtLink: RouterLinkStub,
        },
        data: () => ({
          pagination: {
            currentPage: 1,
            pageSize: 5,
          },
        }),
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
              listProperties: jest.fn(() => PropertiesMock),
              listPropertiesById: jest.fn(() => PropertiesByIdMock),
              listZapProperties: jest.fn(() => ZapPropertiesMock),
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
      expect(wrapper.vm.listProperties.length).toBe(28);
      expect(wrapper.vm.properties.length).toBe(25);
    });
    test("filter only rental properties", async () => {
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
              listProperties: jest.fn(() => PropertiesMock),
              listPropertiesById: jest.fn(() => PropertiesByIdMock),
              listVivaProperties: jest.fn(() => VivaPropertiesMock),
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
      const testProps = {
        selectedPortal: {
          color: "grey lighten-5",
          logo: "/logo-viva.png",
          name: "VivaReal",
          slug: "vivareal",
        },
      };
      const wrapper = createComponent(testProps);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.listProperties.length).toBe(28);
      expect(wrapper.vm.properties.length).toBe(13);

      wrapper.setData({
        ...wrapper.vm.$data,
        filters: {
          sale: false,
          rental: true,
        },
      });

      expect(wrapper.vm.properties.length).toBe(2);
    });
    test("filter only sale properties", async () => {
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
              listProperties: jest.fn(() => PropertiesMock),
              listPropertiesById: jest.fn(() => PropertiesByIdMock),
              listVivaProperties: jest.fn(() => VivaPropertiesMock),
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
      const testProps = {
        selectedPortal: {
          color: "grey lighten-5",
          logo: "/logo-viva.png",
          name: "VivaReal",
          slug: "vivareal",
        },
      };
      const wrapper = createComponent(testProps);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.listProperties.length).toBe(28);
      expect(wrapper.vm.properties.length).toBe(13);

      wrapper.setData({
        ...wrapper.vm.$data,
        filters: {
          sale: true,
          rental: false,
        },
      });

      expect(wrapper.vm.properties.length).toBe(11);
    });
    test("list all valid properties if invalid portal is selected", async () => {
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
              listProperties: jest.fn(() => PropertiesMock),
              listPropertiesById: jest.fn(() => PropertiesByIdMock),
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
      const testProps = {
        selectedPortal: {
          color: "grey lighten-5",
          logo: "/logo-portal.png",
          name: "Portal",
          slug: "Portal",
        },
      };
      const wrapper = createComponent(testProps);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.listProperties.length).toBe(28);
      expect(wrapper.vm.properties.length).toBe(28);
    });
    test("update pagination and properties list", async () => {
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
              listProperties: jest.fn(() => PropertiesMock),
              listPropertiesById: jest.fn(() => PropertiesByIdMock),
              listZapProperties: jest.fn(() => ZapPropertiesMock),
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
      const testProps = {
        selectedPortal: {
          color: "grey lighten-5",
          logo: "/logo-portal.png",
          name: "Zap",
          slug: "Zap",
        },
      };
      const wrapper = createComponent(testProps);
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.properties.length).toBe(28);
      expect(wrapper.vm.$data.currentItems[0].id).toBe("fed26dbe5881");
      expect(
        wrapper.vm.$data.currentItems[wrapper.vm.$data.currentItems.length - 1]
          .id
      ).toBe("a4592d14a531");

      const paginationComponent = wrapper.findComponent({
        name: "v-pagination",
      });

      const updatePaginationSpy = jest.fn();
      paginationComponent.vm.$on("input", updatePaginationSpy);

      expect(wrapper.vm.$data.pagination.currentPage).toBe(1);

      const paginationButton = paginationComponent.findAll("button").at(5);
      await paginationButton.trigger("click");
      await wrapper.vm.$nextTick();

      expect(updatePaginationSpy).toHaveBeenCalled();
      expect(wrapper.vm.$data.pagination.currentPage).toBe(2);
      expect(wrapper.vm.$data.currentItems[0].id).toBe("2c60c7c4ddb2");
      expect(
        wrapper.vm.$data.currentItems[wrapper.vm.$data.currentItems.length - 1]
          .id
      ).toBe("d8849cae5766");
    });
  });
});
