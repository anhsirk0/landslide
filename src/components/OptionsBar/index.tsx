import { FC, Fragment, useState } from "react";

// icons imports
import { IconArrowDown } from "@tabler/icons-react";

// other imports
import clsx from "clsx";
import { Link } from "react-router-dom";
import SelectTheme from "./SelectTheme";

const OptionsBar: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "fixed rounded-btn bg-accent left-[50vw] h-10 w-10 rotate-45 transition-all ease-in-out duration-300 z-50 center",
          open ? "bottom-10" : "-bottom-6",
        )}
      >
        {open && (
          <IconArrowDown className="text-accent-content -rotate-45" size={28} />
        )}
      </button>
      <div
        className={clsx(
          "transition-all ease-in-out duration-300 fixed w-screen bg-accent",
          open ? "bottom-0" : "-bottom-16",
        )}
      >
        <div className="w-full h-16 flex flex-row">
          <div className="navbar">
            <div className="navbar-start">
              <Link
                to="/"
                className="btn btn-sm xxl:btn-md btn-primary option-btn 2xl:text-xl"
              >
                {/* <Logo className="fill-primary" /> */}
                Landslide
              </Link>
            </div>
            <div className="navbar-end">
              <SelectTheme />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OptionsBar;
