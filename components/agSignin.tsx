import Router from "next/router";
import { Button, Form } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";

export default function AgSignin() {
    return <>
        <Form className="my-3 text-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="!rounded-none !flex items-center" variant="primary" /* type="submit" */ onClick={() => Router.push('/account')}>
                { getIconsByName('bi', 'BiLogInCircle') } &nbsp; Sigin
            </Button>
        </Form>
    </>;
}