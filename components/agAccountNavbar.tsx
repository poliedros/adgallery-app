import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import getIconsByName from "../functions/getIconsByName";

import Router from "next/router";

export default function AgAccountNavbar() {
    return (
        <>
            <Navbar
                expand="lg"
                variant="light"
                className="h-screen w-fit !absolute right-0" /* style={{ top: "0px", position: "fixed", left: "0px", right: "0px", height: "0px", alignItems: "center", flexWrap: "wrap"}} */
            >
                {" "}
                {/* w-fit */}
                <Container
                    className="!justify-center" /* style={{ display: "inline-block", textAlign: "left", width: "auto", justifyContent: "center", backgroundColor: "white"}} */
                >
                    <Navbar.Brand className="m-0"
                    onClick={() => Router.push('/preaccount')}>
                        {getIconsByName("ri", "RiAccountCircleFill", "32px", "white")}
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
