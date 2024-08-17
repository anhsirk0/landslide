import { lazy } from "react";
import { AppRoute } from "./types";

const Home = lazy(() => import("@/pages/Home"));
const Netflix = lazy(() => import("@/pages/Netflix"));

const routes: Array<AppRoute> = [
  { path: "/", Element: Home },
  { path: "/netflix", Element: Netflix },
];
export default routes;
