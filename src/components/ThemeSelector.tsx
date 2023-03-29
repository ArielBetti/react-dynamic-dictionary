import React from "react";
import { SwatchIcon } from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useContextReturn } from "../context";
import { twMerge } from "tailwind-merge";

const ThemeSelector = () => {
  const { themes, setTheme, selectedTheme } = useContextReturn();

  console.log(selectedTheme)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="relative p-2 rounded-md shadow-md flex h-full items-center justify-center bg-primary text-primary-content"
          aria-label="Customise options"
        >
          <SwatchIcon className="h-6 w-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="max-h-60 overflow-auto bg-base-300/80 backdrop-blur-md shadow p-2 mr-4 rounded-md gap-2 w-full min-w-[200px] flex flex-col"
          sideOffset={5}
        >
          {themes.map((theme) => (
            <DropdownMenu.Item
              asChild
              className={twMerge(
                "rounded-md hover:bg-secondary hover:text-secondary-content p-2 w-full transition-colors",
                selectedTheme === theme && "bg-primary text-primary-content"
              )}
            >
              <button
                onClick={() => setTheme(theme)}
                className="w-full flex items-start"
              >
                {theme}
              </button>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeSelector;
