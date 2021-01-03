import clockImg from "../images/clock.svg";
import notificationImg from "../images/notification.svg";
import truckImg from "../images/truck.svg";
import rightArrowImg from "../images/rightArrow.svg";
import product1 from "../images/products/product1.png";
import product2 from "../images/products/product2.png";
import product3 from "../images/products/product3.png";

export const orderInfo = {
  arrivingOn: "3/2/2021",
  status: "shipped",
  shippingInfo: [
    {
      day: "Sat, Jan 05 2021",
      id: 2,
      activities: [
        {
          activityMsg: "Your Order is Shipped",
          activityLocation: "Mumbai, Ind",
          activityTime: "8:53 AM",
          id: 3,
        },
        {
          activityMsg: "Your package arrived at our facility",
          activityLocation: "New Delhi, Ind",
          activityTime: "7:53 AM",
          id: 4,
        },
        {
          activityMsg: "Your package arrived at our facility",
          activityLocation: "New Delhi, Ind",
          activityTime: "5:53 AM",
          id: 5,
        },
      ],
    },
    {
      day: "Sat, Jan 02 2021",
      id: 1,
      activities: [
        {
          activityMsg: "Your package is packed",
          activityLocation: "New Delhi, Ind",
          activityTime: "2:53 PM",
          id: 1,
        },
        {
          activityMsg: "Your package arrived at our facility",
          activityLocation: "New Delhi, Ind",
          activityTime: "6:26 PM",
          id: 2,
        },
        {
          activityMsg: "Your package arrived at our facility",
          activityLocation: "New Delhi, Ind",
          activityTime: "7:37 AM",
          id: 3,
        },
        {
          activityMsg: "Your package arrived at our facility",
          activityLocation: "New Delhi, Ind",
          activityTime: "8:53 AM",
          id: 4,
        },
      ],
    },
  ],
};
export const ActionOptionList = [
  {
    optionText: "Reschedule The Delivery",
    id: 1,
    leftIcon: clockImg,
    rightIcon: rightArrowImg,
  },
  {
    optionText: "Pick up from the last Hub / Courier",
    id: 2,
    leftIcon: truckImg,
    rightIcon: rightArrowImg,
  },
  {
    optionText: "Get delivery updates",
    id: 3,
    leftIcon: notificationImg,
    rightIcon: rightArrowImg,
  },
];
export const productBought = {
  price: "Rs 5845",
  title: "Pepe jeans",
  description: "Men Blue Skinny Fit Mid-Rise Clean",
  otherInfo: "Size: 30 | Qty: 1",
  photoUrl: product1,
  id: 1,
};

export const recommendedProducts = [
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Solid Slim Fit Polo T-shirt",
    photoUrl: product2,
    id: 1,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Solid Slim Fit Polo T-shirt",
    photoUrl: product3,
    id: 2,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Men Blue Skinny Fit Mid-Rise Clean",
    photoUrl: product1,
    id: 3,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Solid Slim Fit Polo T-shirt",
    photoUrl: product2,
    id: 4,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Solid Slim Fit Polo T-shirt",
    photoUrl: product3,
    id: 5,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Men Blue Skinny Fit Mid-Rise Clean",
    photoUrl: product1,
    id: 6,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Solid Slim Fit Polo T-shirt",
    photoUrl: product2,
    id: 7,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Solid Slim Fit Polo T-shirt",
    photoUrl: product3,
    id: 8,
  },
  {
    price: "Rs 5845",
    title: "Pepe jeans",
    description: "Men Blue Skinny Fit Mid-Rise Clean",
    photoUrl: product1,
    id: 9,
  },
];
