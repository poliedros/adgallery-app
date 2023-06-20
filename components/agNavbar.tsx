import { Container, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import translations from "../translations.json";
import getIconsByName from "../functions/getIconsByName";

import Router from "next/router";
import { useState } from "react";
//import { useRouter } from "next/router";

export default function AgNavbar() {
  //const router = useRouter();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {translations.notWorkYet.pt}
    </Tooltip>
  );

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
          <div className="flex items-center">
            <Navbar.Brand className="m-0 pr-2" onClick={() => Router.push("/")}>
              {getIconsByName("ri", "RiHome3Fill", "32px")}
            </Navbar.Brand>

            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show2}
              overlay={renderTooltip}
            >
              <Navbar.Brand onClick={() => setShow2(!show2)} className="m-0">
                {" "}
                {/*href="#"*/}
                {getIconsByName("ri", "RiMoneyDollarCircleFill", "32px")}
              </Navbar.Brand>
            </OverlayTrigger>
            <span className="text-black px-2">|</span>
            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show3}
              overlay={renderTooltip}
            >
              <Navbar.Brand
                onClick={() => setShow3(!show3)}
                className="m-0 pr-1.5"
              >
                {" "}
                {/*href="#"*/}
                {getIconsByName("md", "MdBrightness4", "16px")}
              </Navbar.Brand>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show4}
              overlay={renderTooltip}
            >
              <Navbar.Brand
                onClick={() => setShow4(!show4)}
                className="m-0 pr-1.5"
              >
                {" "}
                {/*href="#"*/}
                {getIconsByName("bs", "BsTranslate", "16px")}
              </Navbar.Brand>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show5}
              overlay={renderTooltip}
            >
              <Navbar.Brand
                onClick={() => setShow5(!show5)}
                className="m-0 pr-1.5"
              >
                {" "}
                {/*href="#"*/}
                {getIconsByName("io", "IoMdRadio", "16px")}
              </Navbar.Brand>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show6}
              overlay={renderTooltip}
            >
              <Navbar.Brand
                onClick={() => setShow6(!show6)}
                className="m-0 pr-1.5"
              >
                {" "}
                {/*href="#"*/}
                {getIconsByName("io5", "IoGameController", "16px")}
              </Navbar.Brand>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show7}
              overlay={renderTooltip}
            >
              <Navbar.Brand
                onClick={() => setShow7(!show7)}
                className="m-0 pr-1.5"
              >
                {" "}
                {/*href="#"*/}
                {getIconsByName("ri", "RiUserSmileFill", "16px")}
              </Navbar.Brand>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              //delay={{ show: 250, hide: 400 }}
              show={show8}
              overlay={renderTooltip}
            >
              <Navbar.Brand onClick={() => setShow8(!show8)} className="m-0">
                {" "}
                {/*href="#"*/}
                {getIconsByName("md", "MdWavingHand", "16px")}
              </Navbar.Brand>
            </OverlayTrigger>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
