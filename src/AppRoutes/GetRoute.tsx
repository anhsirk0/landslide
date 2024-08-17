import { ReactElement, Suspense } from "react";
import { Route } from "react-router-dom";

import { Loader } from "@/components";
import { AppRoute } from "@/AppRoutes";

function GetRoute(route: AppRoute) {
  return (
    <Route
      key={route.path}
      path={route.path + (route.allowSubRoutes ? "/*" : "")}
      element={Suspensed(route.Element, route.Skeleton)}
    />
  );
}

const Fallback = () => (
  <div className="flex items-center justify-center h-screen min-w-screen">
    <Loader />
  </div>
);

function Suspensed(
  Component: AppRoute["Element"],
  Skeleton: AppRoute["Skeleton"] = Fallback,
): ReactElement {
  return <Suspense fallback={<Skeleton />} children={<Component />} />;
}

export default GetRoute;
