import { FC, Fragment, useState } from "react";
import clsx from "clsx";
import { IconArrowDown } from "@tabler/icons-react";

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
          "transition-all ease-in-out duration-300 fixed w-screen",
          open ? "bottom-0" : "-bottom-16",
        )}
      >
        <div className="w-full h-16 bg-accent"></div>
      </div>
    </Fragment>
  );
};

export default OptionsBar;
