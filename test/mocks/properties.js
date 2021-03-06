import { zapValidation, vivaValidation } from "@/utils/properties";

const properties = [
  {
    usableAreas: 70,
    listingType: "USED",
    createdAt: "2017-04-22T18:39:31.138Z",
    listingStatus: "ACTIVE",
    id: "7baf2775d4a2",
    parkingSpaces: 1,
    updatedAt: "2017-04-22T18:39:31.138Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg",
    ],
    address: {
      city: "",
      neighborhood: "",
      geoLocation: {
        precision: "NO_GEOCODE",
        location: {
          lon: 0,
          lat: 0,
        },
      },
    },
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "60",
      price: "276000",
      businessType: "SALE",
      monthlyCondoFee: "0",
    },
  },
  {
    usableAreas: 69,
    listingType: "USED",
    createdAt: "2016-11-16T04:14:02Z",
    listingStatus: "ACTIVE",
    id: "a0f9d9647551",
    parkingSpaces: 1,
    updatedAt: "2016-11-16T04:14:02Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
    ],
    address: {
      city: "",
      neighborhood: "",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "0",
      price: "405000",
      businessType: "SALE",
      monthlyCondoFee: "495",
    },
  },
  {
    usableAreas: 77,
    listingType: "USED",
    createdAt: "2018-05-08T00:29:38.179Z",
    listingStatus: "ACTIVE",
    id: "fed26dbe5881",
    parkingSpaces: 1,
    updatedAt: "2018-05-08T00:29:38.179Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Campo Belo",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "810",
      price: "3500",
      rentalTotalPrice: "4440",
      businessType: "RENTAL",
      monthlyCondoFee: "940",
    },
  },
  {
    usableAreas: 75,
    listingType: "USED",
    createdAt: "2017-08-04T01:49:39.052Z",
    listingStatus: "ACTIVE",
    id: "1106a85a38fa",
    parkingSpaces: 1,
    updatedAt: "2017-08-04T01:49:39.052Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Brooklin",
      geoLocation: {
        precision: "RANGE_INTERPOLATED",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "100",
      price: "2200",
      rentalTotalPrice: "3300",
      businessType: "RENTAL",
      monthlyCondoFee: "1100",
    },
  },
  {
    usableAreas: 45,
    listingType: "USED",
    createdAt: "2018-03-26T14:26:20.327Z",
    listingStatus: "ACTIVE",
    id: "548289d0d1df",
    parkingSpaces: 1,
    updatedAt: "2018-03-26T14:26:20.327Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Jardim ??ris",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.723175,
          lat: -23.501005,
        },
      },
    },
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "0",
      price: "1200",
      rentalTotalPrice: "1460",
      businessType: "RENTAL",
      monthlyCondoFee: "260",
    },
  },
  {
    usableAreas: 75,
    listingType: "USED",
    createdAt: "2018-02-26T22:35:07.369Z",
    listingStatus: "ACTIVE",
    id: "f03b84560320",
    parkingSpaces: 1,
    updatedAt: "2018-02-26T22:35:07.369Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Brasilio Machado",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.614014,
          lat: -23.609441,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "0",
      price: "480000",
      businessType: "SALE",
      monthlyCondoFee: "590",
    },
  },
  {
    usableAreas: 120,
    listingType: "USED",
    createdAt: "2017-05-09T11:20:43.564Z",
    listingStatus: "ACTIVE",
    id: "a4592d14a531",
    parkingSpaces: 2,
    updatedAt: "2017-05-09T11:20:43.564Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Moinho Velho",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.601979,
          lat: -23.609364,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "266",
      price: "620000",
      businessType: "SALE",
      monthlyCondoFee: "1250",
    },
  },
  {
    usableAreas: 173,
    listingType: "USED",
    createdAt: "2018-05-29T18:35:00.766Z",
    listingStatus: "ACTIVE",
    id: "2c60c7c4ddb2",
    parkingSpaces: 2,
    updatedAt: "2018-05-29T18:35:00.766Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Ch??cara Inglesa",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.633391,
          lat: -23.609135,
        },
      },
    },
    bathrooms: 0,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "0",
      price: "1050000",
      businessType: "SALE",
      monthlyCondoFee: "0",
    },
  },
  {
    usableAreas: 97,
    listingType: "USED",
    createdAt: "2018-04-05T11:55:52.149Z",
    listingStatus: "ACTIVE",
    id: "bdcdfcc6cdd5",
    parkingSpaces: 2,
    updatedAt: "2018-04-05T11:55:52.149Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Bosque da Sa??de",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "0",
      price: "800000",
      businessType: "SALE",
      monthlyCondoFee: "0",
    },
  },
  {
    usableAreas: 54,
    listingType: "USED",
    createdAt: "2018-06-14T04:50:58.067Z",
    listingStatus: "ACTIVE",
    id: "c4f6894e7b95",
    parkingSpaces: 2,
    updatedAt: "2018-06-14T04:50:58.067Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Cidade Mon????es",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 0,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "538",
      price: "2190",
      rentalTotalPrice: "3327",
      businessType: "RENTAL",
      monthlyCondoFee: "1137",
    },
  },
  {
    usableAreas: 63,
    listingType: "USED",
    createdAt: "2018-04-26T14:24:51.829Z",
    listingStatus: "ACTIVE",
    id: "0b021863e09e",
    parkingSpaces: 2,
    updatedAt: "2018-04-26T14:24:51.829Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Parais??polis",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.72602,
          lat: -23.609625,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "60",
      price: "450000",
      businessType: "SALE",
      monthlyCondoFee: "365",
    },
  },
  {
    usableAreas: 103,
    listingType: "USED",
    createdAt: "2018-05-17T19:06:46.575Z",
    listingStatus: "ACTIVE",
    id: "d8849cae5766",
    parkingSpaces: 2,
    updatedAt: "2018-05-17T19:06:46.575Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Suzana",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.732226,
          lat: -23.609952,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "0",
      price: "4990",
      rentalTotalPrice: "4990",
      businessType: "RENTAL",
      monthlyCondoFee: "0",
    },
  },
  {
    usableAreas: 94,
    listingType: "USED",
    createdAt: "2017-06-28T03:33:14.124Z",
    listingStatus: "ACTIVE",
    id: "98372a94f973",
    parkingSpaces: 2,
    updatedAt: "2017-06-28T03:33:14.124Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Morumbi",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.737969,
          lat: -23.6095,
        },
      },
    },
    bathrooms: 4,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "0",
      price: "540000",
      businessType: "SALE",
      monthlyCondoFee: "650",
    },
  },
  {
    usableAreas: 112,
    listingType: "USED",
    createdAt: "2016-08-19T18:22:53Z",
    listingStatus: "ACTIVE",
    id: "2a464ec47d85",
    parkingSpaces: 2,
    updatedAt: "2016-08-19T18:22:53Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Gumercindo",
      geoLocation: {
        precision: "GEOMETRIC_CENTER",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "3000",
      price: "1180000",
      businessType: "SALE",
      monthlyCondoFee: "800",
    },
  },
  {
    usableAreas: 48,
    listingType: "USED",
    createdAt: "2018-02-07T16:13:02.183Z",
    listingStatus: "ACTIVE",
    id: "bf023087ee44",
    parkingSpaces: 1,
    updatedAt: "2018-02-07T16:13:02.183Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Suzana",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.735385,
          lat: -23.609262,
        },
      },
    },
    bathrooms: 1,
    bedrooms: 1,
    pricingInfos: {
      yearlyIptu: "135",
      price: "350000",
      businessType: "SALE",
      monthlyCondoFee: "660",
    },
  },
  {
    usableAreas: 67,
    listingType: "USED",
    createdAt: "2017-10-02T13:25:07.041Z",
    listingStatus: "ACTIVE",
    id: "49a82fe156b6",
    parkingSpaces: 1,
    updatedAt: "2017-10-02T13:25:07.041Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Bras??lio Machado",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.613805,
          lat: -23.609649,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "80",
      price: "460000",
      businessType: "SALE",
      monthlyCondoFee: "650",
    },
  },
  {
    usableAreas: 49,
    listingType: "USED",
    createdAt: "2017-04-13T04:30:51.570Z",
    listingStatus: "ACTIVE",
    id: "72bafc940a07",
    parkingSpaces: 1,
    updatedAt: "2017-04-13T04:30:51.570Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Fazenda Morumbi",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "0",
      price: "220000",
      businessType: "SALE",
      monthlyCondoFee: "323",
    },
  },
  {
    usableAreas: 94,
    listingType: "USED",
    createdAt: "2017-10-28T11:31:59.958Z",
    listingStatus: "ACTIVE",
    id: "b541c02f1f00",
    parkingSpaces: 2,
    updatedAt: "2017-10-28T11:31:59.958Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Jardim Vergueiro",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.610294,
          lat: -23.609946,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "0",
      price: "720000",
      businessType: "SALE",
      monthlyCondoFee: "700",
    },
  },
  {
    usableAreas: 60,
    listingType: "USED",
    createdAt: "2017-09-15T10:08:25.661Z",
    listingStatus: "ACTIVE",
    id: "6a5bf43072c9",
    parkingSpaces: 2,
    updatedAt: "2017-09-15T10:08:25.661Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Bras??lio Machado",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.613703,
          lat: -23.609714,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "294",
      price: "415000",
      businessType: "SALE",
      monthlyCondoFee: "750",
    },
  },
  {
    usableAreas: 94,
    listingType: "USED",
    createdAt: "2016-08-22T06:18:14Z",
    listingStatus: "ACTIVE",
    id: "3e1b5315da17",
    parkingSpaces: 2,
    updatedAt: "2016-08-22T06:18:14Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Sonia",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "230",
      price: "600000",
      businessType: "SALE",
      monthlyCondoFee: "820",
    },
  },
  {
    usableAreas: 72,
    listingType: "USED",
    createdAt: "2017-04-21T06:50:16.100Z",
    listingStatus: "ACTIVE",
    id: "8a1192bf3d10",
    parkingSpaces: 2,
    updatedAt: "2017-04-21T06:50:16.100Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Cidade Mon????es",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 0,
    bedrooms: 0,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "691",
      price: "4320",
      rentalTotalPrice: "5562",
      businessType: "RENTAL",
      monthlyCondoFee: "1242",
    },
  },
  {
    usableAreas: 67,
    listingType: "USED",
    createdAt: "2018-04-26T14:30:28.096Z",
    listingStatus: "ACTIVE",
    id: "b154e19dcf71",
    parkingSpaces: 2,
    updatedAt: "2018-04-26T14:30:28.096Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Real Parque",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.708056,
          lat: -23.609513,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "120",
      price: "530000",
      businessType: "SALE",
      monthlyCondoFee: "870",
    },
  },
  {
    usableAreas: 319,
    listingType: "USED",
    createdAt: "2017-07-26T17:39:33Z",
    listingStatus: "ACTIVE",
    id: "87a5fc39dd98",
    parkingSpaces: 5,
    updatedAt: "2017-07-26T17:39:33Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Cidade Mon????es",
      geoLocation: {
        precision: "GEOMETRIC_CENTER",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 4,
    bedrooms: 0,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "2403",
      price: "14000",
      rentalTotalPrice: "19758",
      businessType: "RENTAL",
      monthlyCondoFee: "5758",
    },
  },
  {
    usableAreas: 60,
    listingType: "USED",
    createdAt: "2015-05-09T00:04:56Z",
    listingStatus: "ACTIVE",
    id: "20cff5ce88e1",
    parkingSpaces: 2,
    updatedAt: "2015-05-09T00:04:56Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Brooklin Paulista",
      geoLocation: {
        precision: "GEOMETRIC_CENTER",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "50",
      price: "845000",
      businessType: "SALE",
      monthlyCondoFee: "700",
    },
  },
  {
    usableAreas: 348,
    listingType: "USED",
    createdAt: "2015-07-04T14:40:39Z",
    listingStatus: "ACTIVE",
    id: "a6c75bea546c",
    parkingSpaces: 12,
    updatedAt: "2015-07-04T14:40:39Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Cidade Mon????es",
      geoLocation: {
        precision: "GEOMETRIC_CENTER",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 10,
    bedrooms: 0,
    pricingInfos: {
      period: "MONTHLY",
      yearlyIptu: "1847",
      price: "20500",
      rentalTotalPrice: "25940",
      businessType: "RENTAL",
      monthlyCondoFee: "5440",
    },
  },
  {
    usableAreas: 41,
    listingType: "USED",
    createdAt: "2018-03-17T14:24:31.370Z",
    listingStatus: "ACTIVE",
    id: "206edf1affbc",
    parkingSpaces: 1,
    updatedAt: "2018-03-17T14:24:31.370Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Brooklin",
      geoLocation: {
        precision: "RANGE_INTERPOLATED",
        location: {
          lon: -46.687609,
          lat: -23.609504,
        },
      },
    },
    bathrooms: 1,
    bedrooms: 1,
    pricingInfos: {
      yearlyIptu: "118",
      price: "470000",
      businessType: "SALE",
      monthlyCondoFee: "500",
    },
  },
  {
    usableAreas: 86,
    listingType: "USED",
    createdAt: "2018-01-27T11:14:11.388Z",
    listingStatus: "ACTIVE",
    id: "bce8aec01881",
    parkingSpaces: 2,
    updatedAt: "2018-01-27T11:14:11.388Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Jardim Londrina",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 0,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: "145",
      price: "745000",
      businessType: "SALE",
      monthlyCondoFee: "562",
    },
  },
  {
    usableAreas: 137,
    listingType: "USED",
    createdAt: "2017-08-11T14:50:29.129Z",
    listingStatus: "ACTIVE",
    id: "b94a35b2e2b4",
    parkingSpaces: 3,
    updatedAt: "2017-08-11T14:50:29.129Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Gumercindo",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.61953,
          lat: -23.609763,
        },
      },
    },
    bathrooms: 0,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "5300",
      price: "1465000",
      businessType: "SALE",
      monthlyCondoFee: "1267",
    },
  },
  {
    usableAreas: 111,
    listingType: "USED",
    createdAt: "2018-02-27T19:32:17.932Z",
    listingStatus: "ACTIVE",
    id: "386594047542",
    parkingSpaces: 2,
    updatedAt: "2018-02-27T19:32:17.932Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Gumercindo",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.61953,
          lat: -23.609763,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "270",
      price: "895000",
      businessType: "SALE",
      monthlyCondoFee: "980",
    },
  },
  {
    usableAreas: 118,
    listingType: "USED",
    createdAt: "2018-03-21T20:00:58.940Z",
    listingStatus: "ACTIVE",
    id: "9a84086b655d",
    parkingSpaces: 2,
    updatedAt: "2018-03-21T20:00:58.940Z",
    owner: false,
    images: [
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg",
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg",
    ],
    address: {
      city: "S??o Paulo",
      neighborhood: "Vila Sonia",
      geoLocation: {
        precision: "ROOFTOP",
        location: {
          lon: -46.659002,
          lat: -23.553518,
        },
      },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: "285",
      price: "790000",
      businessType: "SALE",
      monthlyCondoFee: "720",
    },
  },
];

export const PropertiesMock = properties.filter((p) => {
  return (
    p.address.geoLocation.location.lon !== 0 &&
    p.address.geoLocation.location.lat !== 0 &&
    !!p.address.city.length
  );
});

export const PropertiesByIdMock = PropertiesMock.reduce(
  (properties, property) => ({
    ...properties,
    [property.id]: property,
  }),
  {}
);

export const VivaPropertiesMock = PropertiesMock.reduce(
  vivaValidation.processProperties,
  {
    properties: [],
    rental: [],
    sale: [],
  }
);

export const ZapPropertiesMock = PropertiesMock.reduce(
  zapValidation.processProperties,
  {
    properties: [],
    rental: [],
    sale: [],
  }
);
