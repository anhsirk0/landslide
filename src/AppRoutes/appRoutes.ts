import { lazy } from "react";
import { AppRoute } from "./types";

import HomeCard from "@/pages/Home/HomeCard";
import SpotifyCard from "@/pages/Spotify/SpotifyCard";
import NetflixCard from "@/pages/Netflix/NetflixCard";

const Home = lazy(() => import("@/pages/Home"));
const Netflix = lazy(() => import("@/pages/Netflix"));
const Spotify = lazy(() => import("@/pages/Spotify"));

const routes: Array<AppRoute> = [
  { title: "Home", path: "", Element: Home, Card: HomeCard },
  { title: "Netflix", path: "netflix", Element: Netflix, Card: NetflixCard },
  { title: "Spotify", path: "spotify", Element: Spotify, Card: SpotifyCard },
];
export default routes;
