import { LazyExoticComponent, MemoExoticComponent, FC } from "react";

export type AppRoute = {
  path: string;
  allowSubRoutes?: boolean;
  Skeleton?: MemoExoticComponent<FC<any>> | (() => JSX.Element);
  Element: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
};
