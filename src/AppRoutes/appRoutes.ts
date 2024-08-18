import { lazy } from "react";
import { AppRoute } from "./types";

import SpotifyCard from "@/pages/Spotify/SpotifyCard";

const Home = lazy(() => import("@/pages/Home"));
const Netflix = lazy(() => import("@/pages/Netflix"));
const Spotify = lazy(() => import("@/pages/Spotify"));

const routes: Array<AppRoute> = [
  { title: "Home", path: "", Element: Home },
  { title: "Netflix", path: "netflix", Element: Netflix },
  { title: "Spotify", path: "spotify", Element: Spotify, Card: SpotifyCard },
];
export default routes;
