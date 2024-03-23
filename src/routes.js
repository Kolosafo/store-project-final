import { lazy } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
export const ALLOWED_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/products/:category?",
    component: Products,
    requiresAuth: false,
  },
  {
    path: "/cart",
    component: Cart,
    requiresAuth: false,
  },
  {
    path: "/checkout",
    component: Checkout,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/about",
    component: About,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
