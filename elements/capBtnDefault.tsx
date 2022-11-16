import { Button } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translantions from "../translations.json";

export default function CapBtnDefault({
    kind,
    variant = "",
    size = undefined,
    type = undefined,
    value = "",
    click = undefined,
    change = undefined,
    active = false,
    additional = undefined,
}: {
    kind: "close" | "enter" | "remove";
    variant?: string;
    size?: "sm" | "lg" | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    value?: string;
    click?: any;
    change?: any;
    active?: boolean;
    additional?: any;
}) {
    let icon = {
        close: (getIconsByName("bs", "BsX")),
        enter: (getIconsByName("bs", "BsCheck")),
        remove: (getIconsByName("hi", "HiTrash")),
    };
    let label = {
        close: (translantions.close["pt"]),
        enter: (translantions.enter["pt"]),
        remove: (translantions.erase["pt"]),
    };
    return (
        <>
            {
                <Button
                    className="!rounded-none !flex items-center -mb-[1rem]"
                    variant={variant !== '' ? variant : 'primary'}
                    size={size}
                    type={type}
                    value={value}
                    onClick={click}
                    onChange={change}
                    active={active}
                >
                    {icon[kind]} &nbsp;
                    {label[kind]}
                </Button>
            }
        </>
    );
}

/* var jump = {
    "1":some_func,
    "2":function() {find_my("cat");},
    "3":function() {find_my("dog");}
} */
