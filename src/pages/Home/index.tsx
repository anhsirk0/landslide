import { FC } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks";
import { AppRoute, appRoutes } from "@/AppRoutes";

const Home = () => {
  usePageTitle("Home");
  return (
    <div className="center flex-col gap-8 h-full p-4 max-w-7xl">
      <p className="text-5xl">
        Landslides - Collection of Landing pages redesigned using DaisyUI
      </p>
      <div className="grid grid-cols-12 gap-8">
        {appRoutes.map((route) => (
          <Link
            to={route.path}
            key={route.path + route.title}
            className="col-span-12 md:col-span-6 xxl:col-span-4"
          >
            {route.Card ? <route.Card /> : <RouteCard route={route} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

const RouteCard: FC<{ route: AppRoute }> = ({ route }) => (
  <div className="card bg-primary">
    <div className="card-body">
      <p className="card-title text-primary-content">{route.title}</p>
    </div>
  </div>
);

export default Home;
