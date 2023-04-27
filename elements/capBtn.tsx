import { Button } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translantions from "../translations.json";

export default function CapBtn({
  kind = "default",
  label = "emptyText",
  variant = undefined,
  size = undefined,
  type = undefined,
  value = undefined,
  click = undefined,
  change = undefined,
  active = false,
  icon = undefined,
  iconType = undefined,
  href = undefined,
  as = undefined,
  bsPrefix = undefined,
  additional = undefined,
  css = undefined,
  language = "pt",
}: {
  kind?: "default" | "close" | "enter" | "remove";
  label?: string;
  variant?: string;
  size?: "sm" | "lg" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  value?: string;
  click?: any;
  change?: any;
  active?: boolean;
  icon?: string;
  iconType?: string;
  href?: string;
  as?: any;
  bsPrefix?: string;
  additional?: any;
  css?: string;
  language?: "pt";
}) {
  let iconItems = {
    default: "",
    close: getIconsByName("hi", "HiX"),
    enter: getIconsByName("hi", "HiCheck"),
    remove: getIconsByName("hi", "HiTrash"),
  };
  let labelItems = {
    default: "",
    close: translantions.close[language],
    enter: translantions.enter[language],
    remove: translantions.erase[language],
  };
  return (
    <>
      <Button
        className={"!rounded-none !flex items-center -mb-[1rem] " + css}
        variant={variant ? variant : "primary"}
        size={size}
        type={type}
        value={value}
        onClick={click}
        onChange={change}
        active={active}
        href={href}
        as={as}
        bsPrefix={bsPrefix}
      >
        {kind === "default" ? (
          <>
            {iconType && icon ? getIconsByName(iconType, icon) : ""} &nbsp;
            {/* {translantions[label][language]} */}
          </>
        ) : (
          <>
            {iconItems[kind]} &nbsp;
            {labelItems[kind]}
          </>
        )}
      </Button>
    </>
  );
}
