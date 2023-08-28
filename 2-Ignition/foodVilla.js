import React from "react";
import ReactDOM from "react-dom/client";

/* 
            Header
                - Logo
                - NavBar
                - Cart
            Body
                - Search bar
                - Restraunt Card
                    - Image
                    - Name
                    - Rating
                    - Cusines
            Footer
                - Links
                - CopyRights
*/
const Title = () => (
    <a href="/">
        <img alt="Logo" src="https://foodvilla.no/src/img/logo.png" className="logo"/>
    </a>
);
const Header = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="about">About Us</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="cart">Cart</a></li>
            </ul>
        </div>
    </div>   
)

const restrauntList = [
    {
        "info": {
          "id": "254127",
          "name": "McDonald's",
          "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
          "locality": "HR Panchkula Sec-11",
          "areaName": "Sector 11",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "American"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "254127",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2800
          },
          "parentId": "630",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-01 23:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-hr-panchkula-sec-11-sector-11-chandigarh-254127",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "49691",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "z4b7yzchjbyoidimzlg0",
          "locality": "Sector-9",
          "areaName": "Sector 9",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "49691",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2600
          },
          "parentId": "2456",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 02:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹999",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-sector-9-chandigarh-49691",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "48343",
          "name": "KFC",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "locality": "SCO 328",
          "areaName": "Sector 9",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "48343",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2800
          },
          "parentId": "547",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-sco-328-sector-9-chandigarh-48343",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "66024",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Sector-9",
          "areaName": "Panchkula",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "66024",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2800
          },
          "parentId": "166",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 02:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-sector-9-panchkula-chandigarh-66024",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "68533",
          "name": "Vijay Dairy",
          "cloudinaryImageId": "jrrxcxw1yvw9yitglfpt",
          "locality": "Panchkula",
          "areaName": "Sector 9",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Beverages",
            "Bakery",
            "Ice Cream"
          ],
          "avgRating": 4.7,
          "veg": true,
          "feeDetails": {
            "restaurantId": "68533",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2600
          },
          "parentId": "223178",
          "avgRatingString": "4.7",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 13,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "13 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-01 21:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/vijay-dairy-panchkula-sector-9-chandigarh-68533",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "407830",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "z8bzdhvwntp22ntamikg",
          "locality": "SECTOR-9",
          "areaName": "Panchkula",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
            "restaurantId": "407830",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2800
          },
          "parentId": "2233",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 00:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-sector-9-panchkula-chandigarh-407830",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "48888",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "Panchkula",
          "areaName": "Sector 20",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "48888",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3600
          },
          "parentId": "2",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-01 23:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-panchkula-sector-20-chandigarh-48888",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "338059",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "ot9o6xludkfdnr4fqvtb",
          "locality": "Panchkula",
          "areaName": "Sector 14",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "338059",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2800
          },
          "parentId": "4961",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-panchkula-sector-14-chandigarh-338059",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361958",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Kalgidhar Enclave",
          "areaName": "Baltana Zirakpur",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3.7,
          "feeDetails": {
            "restaurantId": "361958",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3600
          },
          "parentId": "721",
          "avgRatingString": "3.7",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-01 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-kalgidhar-enclave-baltana-zirakpur-chandigarh-361958",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "238182",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "gdflzeja1jytr1537gs9",
          "locality": "NAC",
          "areaName": "Panchkula",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "238182",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3600
          },
          "parentId": "4925",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-nac-panchkula-chandigarh-238182",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "238175",
          "name": "Faasos - Wraps & Rolls",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "NAC",
          "areaName": "Panchkula",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "238175",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3600
          },
          "parentId": "21809",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-02 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-nac-panchkula-chandigarh-238175",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "41176",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
          "locality": "Chaayos Elante Mall Chandigarh",
          "areaName": "Industrial Area Phase I",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Beverages",
            "Chaat",
            "Desserts",
            "Home Food",
            "Italian",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "Sweets"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "41176",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4900
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4900
          },
          "parentId": "281782",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 6.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "6.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-01 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-chaayos-elante-mall-industrial-area-phase-i-chandigarh-41176",
          "type": "WEBLINK"
        }
      }
]

// const RestrauntCard = ({restraunt}) => {
//     // here the props is parapeters. revieving agruments from functional components. 
//     const {name, cuisines, avgRating, cloudinaryImageId, areaName} = restraunt.info;
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId} />
//             <h3>{name}</h3>
//             <h5 className="rating">{avgRating}</h5>
//             <h6 className="tags">{cuisines.slice(0, 3).join(", ")}</h6>
//             <h6 className="tags">{areaName}</h6>
            
            
//         </div>
//     )
// };

const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId, areaName}) => {
    // here the props is parapeters. revieving agruments from functional components. 
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId} />
            <h3>{name}</h3>
            <h5 className="rating">{avgRating}</h5>
            <h6 className="tags">{cuisines.slice(0, 3).join(", ")}</h6>
            <h6 className="tags">{areaName}</h6>
        </div>
    )
};

// Now this is a hard coded card. we don't have just the burger king.. we have other outlets too.. now how to create dynamic cards??
// aspect-ratio: auto 425 / 252;

const Body = () => (
    <div className="body">
        {/* here, restraunt = {...}, is called props, a.k.a arguments.  */}
        {/* <RestrauntCard restraunt = {restrauntList[0]}/> */}
        {/* <RestrauntCard 
            name={restrauntList[0].data.name}
            cuisines={restrauntList[0].data.cuisines}
        /> */}
        {/* <RestrauntCard restraunt = {restrauntList[1]}/>
        <RestrauntCard restraunt = {restrauntList[2]}/>
        <RestrauntCard restraunt = {restrauntList[3]}/>
        ...
        <RestrauntCard restraunt = {restrauntList[11]}/> */}
        {/* <RestrauntCard {...restrauntList[0].info}/>
        <RestrauntCard {...restrauntList[1].info}/>
        <RestrauntCard {...restrauntList[2].info}/> 
        ........
        */}
        {restrauntList.map((restraunt)=>{
            return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/> 
        })}
        
    </div>
)

const Footer = () => (
    <div className="footer">
        
    </div>
)

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);