import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  DEVICE_ROUTE,
  ABOUTUS_ROUTE,
  HELP_ROUTE,
  TRACK_ROUTE,
  CONTACT_ROUTE,
  MAIN_ROUTE,
  BASKETORDER_ROUTE
} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import Track from "./pages/Track";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import BasketOrder from "./pages/BasketOrder";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  { path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: BASKETORDER_ROUTE,
    Component: BasketOrder,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: ABOUTUS_ROUTE,
    Component: AboutUs
  },
  {
    path: HELP_ROUTE,
    Component: Help
  },
  {
    path: TRACK_ROUTE,
    Component: Track
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact
  },
  {
    path: MAIN_ROUTE,
    Component: Main
  },
];
