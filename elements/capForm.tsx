import { Form } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translantions from "../translations.json";

export default function CapForm({
  kind = "default",
  label = "emptyText",
  column = false,
  controlId = undefined,
  type = undefined,
  value = undefined,
  click = undefined,
  change = undefined,
  placeholder = "emptyText",
  htmlFor = undefined,
  icon = undefined,
  iconType = undefined,
  validated = undefined,
  additional = undefined,
  language = "pt",
}: {
  kind?: "default" | "close" | "enter" | "remove";
  label?: string;
  column?: "sm" | "lg" | boolean;
  controlId?: string;
  type?: string;
  value?: any;
  click?: any;
  change?: any;
  placeholder?: string;
  htmlFor?: string;
  icon?: string;
  iconType?: string;
  validated?: boolean;
  additional?: any;
  language?: "pt";
}) {
  return (
    <>
      <Form.Group
        className="mb-3"
        controlId={controlId}
        placeholder={placeholder}
      >
        {label !== "text" ? (
          <Form.Label
            column={column}
            type={type}
            htmlFor={htmlFor}
            validated={validated}
          >
            <div className="!flex items-center">
              {iconType && icon ? getIconsByName(iconType, icon) : ""} &nbsp;
              {/* {(translantions[label])[language]} */}
            </div>
          </Form.Label>
        ) : null}
        <Form.Control
          type={type}
          // placeholder={translantions[placeholder][language]}
          value={value}
          onClick={click}
          onChange={change}
        />
      </Form.Group>
    </>
  );
}
