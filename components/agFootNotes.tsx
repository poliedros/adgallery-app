import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import CapBtnDefault from "../elements/capBtnDefault";

import getIconsByName from "../functions/getIconsByName";

export default function AgFootNotes() {
  return (
    <>
      {/* getIconsByName("ri", "RiHomeSmileFill", "72px") */}
      <Container className="font-[Montserrat] flex flex-col uppercase tracking-widest justify-center text-center w-screen align-middle mt-6 pb-3 unselectable">
        <h6 className="flex items-center justify-center content-footer">
          Desenvolvido por{" "}
          <a
            href="https://czar.dev"
            style={{
              fontFamily: "Jost",
              fontWeight: "600",
              textDecoration: "none",
            }}
            className="text-xl tracking-normal text-white mx-2"
          >
            <span
              className="inline-block align-top scale-x-[-1]"
              style={{ filter: "fliph" }}
            >
              C
            </span>
            ZAR+
          </a>
          parceria com{" "}
          <a
            href="https://info.czar.dev"
            style={{
              fontFamily: "Playfair Display",
              fontWeight: "700",
              textDecoration: "none",
            }}
            className="text-xl tracking-normal text-white ml-2"
          >
            OPÇÃO
          </a>
        </h6>
        <h6 className="text-sm">
          São João Nepomuceno <b> · Minas Gerais · </b> Brasil
        </h6>
        {/* <CapBtnDefault kind="remove" variant={'danger'} /> */}
        {/* <h6>
          Summer girl (https://skfb.ly/o6zwT) by xenia.lipilina is licensed
          under Creative Commons Attribution
          (http://creativecommons.org/licenses/by/4.0/).
        </h6> */}
      </Container>
    </>
  );
}
