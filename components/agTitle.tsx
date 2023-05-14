import { Button, Col, Overlay, Row, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import getIconsByName from "../functions/getIconsByName";
import { useRef, useState } from "react";
import Animation from "./Animation";

export default function AgTitle() {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;
  const first = new Date("1/10/2001");
  const efirst = new Date("1/10/2021");
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var month = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();

  function monthDiff(d1: any, d2: any) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  function romanize(num: number) {
    if (isNaN(num)) return NaN;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;
    while (i--) {
      let vl = digits.pop();
      if (vl) roman = (key[+vl + i * 10] || "") + roman;
    }
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      {/* <Animation />
      <Row>
        <Col></Col>
        <Col className="flex justify-center">
          <div className="fixed top-[37vh] z-10">
            <Button
              ref={target}
              onClick={() => setShow(!show)}
              className="!flex items-center rounded-0"
              variant="info"
            >
              {getIconsByName("bs", "BsFillChatDotsFill")} &nbsp; Conversar
            </Button>
          </div>
        </Col>
      </Row>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props} className="rounded-0">
            <div className="flex flex-col">
              <Button className="m-1 !flex items-center rounded-0">
                {getIconsByName("bs", "BsFillChatDotsFill")} &nbsp; Conversar
              </Button>
              <Button className="m-1 rounded-0">
                Fazer uma pergunta de multiplaescolha
              </Button>
              <Button className="m-1 rounded-0">Pedir informações</Button>
              <Button className="m-1 rounded-0">Anunciar no OPÇÃO</Button>
            </div>
          </Tooltip>
        )}
      </Overlay> */}
      <Container className="text-center align-middle">
        <div className="h-screen flex justify-center items-center flex-column">
          <h3>O seu guia de compras</h3>
          {/* <h1 className="font-[Jost] unselectable text-[10rem]">
            <span className="font-thin">G</span>
            <span className="font-extralight">A</span>
            <span className="font-light">L</span>
            <span className="font-normal">E</span>
            <span className="font-light">R</span>
            <span className="font-extralight">I</span>
            <span className="font-thin">A</span>
          </h1> */}
          <h1
            style={{ fontFamily: "Playfair Display" }}
            className="font-bold unselectable text-[25vw] tracking-tight uppercase titleLg"
          >
            Opção
          </h1>
          <h5 style={{ fontFamily: "Montserrat" }}>
            {monthDiff(efirst, today)}ª Edição <b>· {month}</b> de {yyyy}{" "}
            <span
              style={{ fontFamily: "Playfair Display" }}
              className="italic text-slate-200"
            >
              versão virtual
            </span>{" "}
            <br />
          </h5>
          <h5 style={{ fontFamily: "Montserrat" }}>
            <span
              style={{ fontFamily: "Playfair Display" }}
              className="italic text-lime-400"
            >
              Rosa Maria
            </span>{" "}
            <b>·</b>
            {/* <email> */}{" "}
            <a href={"mailto:informativoopcao@gmail.com"}>
              informativoopcao@gmail.com
            </a>
            {/* </email> */}{" "}
            <b>
              · <a href={"tel:98898-6305"}>98898-6305</a>
            </b>{" "}
            <span style={{ fontFamily: "Playfair Display" }} className="italic">
              oi
            </span>{" "}
            <b>
              · <a href={"tel:99920-3720"}>99920-3720</a>
            </b>{" "}
            <span style={{ fontFamily: "Playfair Display" }} className="italic">
              vivo
            </span>
          </h5>
        </div>
        <h5 className="mt-6">
          <sub>
            <b className="font-[Playfair] uppercase">Opção</b>
          </sub>
        </h5>
        <h3 style={{ fontFamily: "Montserrat" }}>
          {month} de 20<b>{yyyy.toString().slice(2)}</b>
        </h3>
        <div className="flex justify-center">
          <div
            className="border-t-2 border-lime-400 my-4 w-40" /* size="2" width="5%" color="greenyellow" */
          />
        </div>
        <h6 style={{ fontFamily: "Montserrat" }} className="mb-9">
          Informativo - Ano{" "}
          {romanize(today.getFullYear() - first.getFullYear())} - <b>{month}</b>{" "}
          de {yyyy} - Nº {romanize(monthDiff(first, today))} <br />
          São João Nepomuceno e Região - Minas Gerais <br />
        </h6>
      </Container>
    </>
  );
}
