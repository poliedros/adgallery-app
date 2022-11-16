import { Container, Navbar } from "react-bootstrap";
import translations from "../translations.json";
import getIconsByName from "../functions/getIconsByName";

import Router from "next/router";
//import { useRouter } from "next/router";

export default function AgNavbar() {
    //const router = useRouter();

    return (
        <>
            <Navbar
                className="m-1 overflow-hidden !fixed top-0 left-0 right-0 z-10"
                //style={{ top: "0px", position: "fixed", left: "0px", right: "0px", height: "0px", alignItems: "center", flexWrap: "wrap" }}
            >
                {" "}
                <Container
                    className="w-auto bg-white"
                    //style={{ display: "inline-block", textAlign: "left", width: "auto", justifyContent: "center", backgroundColor: "white" }}
                >
                    <div className="flex">
                    <Navbar.Brand
                        className="m-0"
                        onClick={() => Router.push("/")}
                    >
                        {getIconsByName("ri", "RiHome3Fill", "32px")}
                    </Navbar.Brand>
                    &nbsp;
                    <Navbar.Brand href="#" className="m-0">
                        {getIconsByName(
                            "ri",
                            "RiMoneyDollarCircleFill",
                            "32px"
                        )}
                    </Navbar.Brand>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
