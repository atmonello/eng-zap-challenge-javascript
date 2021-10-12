import Vuetify from "vuetify";
import Vuex from "vuex";
import "../test.setup";
import flushPromises from "flush-promises";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import PropertyDetailComponent from "@/components/property/detail.vue";
import { SelectedPropertyMock, AddressApiMock } from "@/test/mocks/property";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Property", () => {
  describe("Detail component", () => {
    let vuetify;
    let store;

    const createComponent = (props) => {
      return mount(PropertyDetailComponent, {
        localVue,
        vuetify,
        propsData: props,
        store,
        stubs: {
          transition: true,
          GmapMap: true,
          GmapMarker: true,
        },
        mocks: {
          $addressApi: {
            buildGeoToAddressUrl: jest.fn(() => "http://test.api/address"),
            get: jest.fn(() => AddressApiMock),
          },
          $axios: (a) => a,
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

      const expectedAddressResult = {
        administrative_area: "Jardim Paulista",
        confidence: 0.8,
        continent: "South America",
        country: "Brazil",
        country_code: "BRA",
        county: "Sao Paulo",
        distance: 0.024,
        label: "Avenida Padre Antonio Jose Dos Santos 1060, São Paulo, Brazil",
        latitude: -23.60932,
        locality: "São Paulo",
        longitude: -46.687722,
        name: "Avenida Padre Antonio Jose Dos Santos 1060",
        neighbourhood: "Itaim Bibi",
        number: "1060",
        postal_code: "04563-003",
        region: "Sao Paulo",
        region_code: "SP",
        street: "Avenida Padre Antonio Jose Dos Santos",
        type: "address",
      };

      const wrapper = createComponent({
        selectedProperty: SelectedPropertyMock,
      });
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.$data.propertyAddress).toStrictEqual(
        expectedAddressResult
      );
      expect(wrapper.vm.propertyAddressFormatted).toBe(
        "Avenida Padre Antonio Jose Dos Santos - Brooklin, São Paulo, SP"
      );
      expect(wrapper.vm.propertyGeolocation).toStrictEqual({
        lat: -23.609504,
        lng: -46.687609,
      });
    });
  });
});
