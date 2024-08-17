import {
  Fragment,
  ComponentPropsWithRef,
  ElementType,
  createElement,
  ReactNode,
} from "react";
import DefaultLoader, { LoaderProps } from "@/components/Loader";

interface LoadingProps<C> {
  on: boolean;
  loaderProps?: LoaderProps;
  as?: C;
  Loader?: ReactNode;
  div?: boolean;
}

function Loading<C extends ElementType>({
  on,
  as: component,
  children,
  Loader,
  div,
  loaderProps,
  ...rest
}: LoadingProps<C> & ComponentPropsWithRef<C>) {
  return createElement(
    component ?? (div ? "div" : Fragment),
    div || component ? rest : {},
    on ? Loader || <DefaultLoader {...loaderProps} /> : children,
  );
}

export default Loading;
