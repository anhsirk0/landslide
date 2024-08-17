import { useEffect, useState } from "react";

function toPageTitle(title: string = ""): string {
  const sep: string = " • ";
  return title + sep + "Landslide";
}

const usePageTitle = (...args: Parameters<typeof toPageTitle>) => {
  const [pageTitle, setPageTitle] = useState<string>(toPageTitle(...args));

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return {
    title: pageTitle,
    setTitle: (...args: Parameters<typeof toPageTitle>) =>
      setPageTitle(toPageTitle(...args)),
  };
};

export default usePageTitle;
