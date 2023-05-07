import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import translations from "../translations.json";
import { useState } from "react";

export default function AgSignup() {
  const [show, setShow] = useState(false);

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {translations.notWorkYet.pt}
    </Tooltip>
  );
  return (
    <>
      <Form className="my-3 text-center">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>{translations.name.pt}</Form.Label>
          <Form.Control
            type="text"
            placeholder={translations.enterName.pt}
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{translations.email.pt}</Form.Label>
          <Form.Control
            type="email"
            placeholder={translations.enterEmail.pt}
            disabled
          />
          {/* <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{translations.password.pt}</Form.Label>
          <Form.Control
            type="password"
            placeholder={translations.enterPassword.pt}
            disabled
          />
        </Form.Group>
        <OverlayTrigger
          placement="bottom"
          //delay={{ show: 250, hide: 400 }}
          show={show}
          overlay={renderTooltip}
        >
          <Button
            className="!rounded-none"
            variant="secondary"
            onClick={() => setShow(!show)}
          >
            {" "}
            {/*type="submit"*/}
            {translations.signup.pt}
          </Button>
        </OverlayTrigger>
      </Form>
    </>
  );
}
