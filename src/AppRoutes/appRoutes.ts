import { lazy } from "react";
import { AppRoute } from "./types";

const Home = lazy(() => import("@/pages/Home"));
const Netflix = lazy(() => import("@/pages/Netflix"));
const Spotify = lazy(() => import("@/pages/Spotify"));

const routes: Array<AppRoute> = [
  { title: "Home", path: "/", Element: Home },
  { title: "Netflix", path: "/netflix", Element: Netflix },
  { title: "Spotify", path: "/spotify", Element: Spotify },
];
export default routes;
