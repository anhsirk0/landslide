import { LazyExoticComponent, MemoExoticComponent, FC } from "react";

export type AppRoute = {
  path: string;
  title: string;
  allowSubRoutes?: boolean;
  Card?: MemoExoticComponent<FC<any>> | (() => JSX.Element);
  Skeleton?: MemoExoticComponent<FC<any>> | (() => JSX.Element);
  Element: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
};
