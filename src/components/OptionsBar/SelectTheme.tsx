// icons imports
import { IconColorSwatch } from "@tabler/icons-react";

// other imports
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

// local imports
import { themes } from "@/config";
import { useTheme } from "@/hooks";

const SelectTheme = () => {
  const { applyTheme } = useTheme();
  return (
    <Menu>
      <div className="dropdown dropdown-top dropdown-end">
        <MenuButton
          className="tooltip tooltip-bottom tooltip-accent"
          data-tip="Change theme"
        >
          <label
            tabIndex={0}
            className="btn btn-sm 2xl:btn-md 2xl:px-3 btn-primary option-btn"
          >
            Theme
            <IconColorSwatch />
          </label>
        </MenuButton>
        <MenuItems className="dropdown-content z-[1] flex flex-col gap-2 p-4 bg-accent rounded-box h-96 min-h-0 overflow-y-auto mb-4 w-52 shadow-xl">
          {themes.map((theme) => (
            <MenuItem
              as="div"
              key={theme}
              className="btn h-10 justify-between w-full"
              onClick={() => applyTheme(theme)}
              data-theme={theme}
            >
              {theme}
              <div className="flex flex-row gap-1 rounded-btn [&>div]:h-6 [&>div]:w-2 [&>div]:rounded-xl">
                <div className="bg-primary" />
                <div className="bg-accent" />
                <div className="bg-secondary" />
                <div className="bg-neutral" />
              </div>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </Menu>
  );
};

export default SelectTheme;
