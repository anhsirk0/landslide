import { FC, Fragment, useState, useEffect } from "react";

// icons imports
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

// other imports
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/helpers";
import { Logo } from "@/components";
import SelectTheme from "./SelectTheme";

const OptionsBar: FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setOpen(true);
  }, [location]);

  return (
    <div
      className={cn(
        "fixed right-0 bottom-0 p-4 h-24 transition-all ease-in-out duration-300",
        open ? "w-full" : "w-24",
      )}
    >
      <div className="rounded-box bg-accent w-full overflow-hidden center flex-row p-2">
        {open && (
          <Fragment>
            <Link
              to="/"
              className="btn btn-sm rounded-btn xxl:btn-md btn-primary option-btn xxl:text-xl"
            >
              <Logo className="fill-primary-content" />
              Landslides
            </Link>
            <div className="grow"></div>
            <div className="space-x-4">
              <a
                href="https://github.com/anhsirk0/landslides"
                target="_blank"
                className="btn btn-sm xxl:btn-md btn-primary option-btn xxl:text-xl"
              >
                Source Code
              </a>

              <SelectTheme />
            </div>
          </Fragment>
        )}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "btn btn-accent h-full w-12 transition-all ease-in-out duration-300 z-50 center p-0 rounded-none",
          )}
        >
          <IconAdjustmentsHorizontal className="" />
        </button>
      </div>
    </div>
  );
};

export default OptionsBar;
