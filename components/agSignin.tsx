import Router from "next/router";
import { Button, Form } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translations from "../translations.json";

export default function AgSignin() {
  return (
    <>
      <Form className="my-3 flex flex-col items-center text-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{translations.email.pt}</Form.Label>
          <Form.Control type="email" placeholder={translations.enterEmail.pt} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{translations.password.pt}</Form.Label>
          <Form.Control
            type="password"
            placeholder={translations.enterPassword.pt}
          />
        </Form.Group>

        <Button
          className="!rounded-none !flex items-center"
          variant="primary"
          /* type="submit" */ onClick={() => Router.push("/account")}
        >
          {getIconsByName("bi", "BiLogInCircle")} &nbsp;{" "}
          {translations.signin.pt}
        </Button>
      </Form>
    </>
  );
}
