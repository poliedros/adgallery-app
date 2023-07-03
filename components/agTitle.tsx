import {
  Button,
  Col,
  Form,
  Modal,
  Overlay,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import getIconsByName from "../functions/getIconsByName";
import { useRef, useState } from "react";
import Animation from "./Animation/Animation";
import { url } from "inspector";

import Router from "next/router";

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

  const [showModal, setShowModal] = useState(false);
  const [showModalQR, setShowModalQR] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCloseModalQR = () => setShowModalQR(false);
  const handleShowModalQR = () => setShowModalQR(true);

  return (
    <>
      {/* <Animation />*/}
      {/* <Row>
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          <h2 className="mb-4 mt-1">Forma de Trabalho</h2>
          <h6>
            O{" "}
            <span className="font-['Playfair_Display'] font-bold uppercase">
              <b>Opção</b>
            </span>{" "}
            é um jornal entregue na região de São João Nepomuceno - Minas
            Gerais. Publicações mensais são distribuidas por{" "}
            <span className="font-['Playfair_Display'] italic text-lime-700">
              Rosa Maria
            </span>{" "}
            no comércio local. Os preços devem ser consultado à ela, assim como
            a forma de pagamento.
          </h6>
          <h5>
            Entretanto a{" "}
            <span className="underline decoration-red-400">
              forma virtual tem regras diferentes
            </span>
            . Você pode escrever um e-mail solicitando para pôr a sua propaganda
            somente aqui, sem ter a propaganda no jornal que é distribuido na
            região.
          </h5>
          <h6>
            Escolha um tamanho e pague mensalmente para ter a sua publicação
            visível no site, caso você opte por{" "}
            <span className="underline decoration-red-400">
              anúnciar também no jornal você ganha um desconto incrível
            </span>
            . Os preços e tamanhos estão logo abaixo.
          </h6>
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>tamanho</th>
                <th>formato</th>
                <th>preço</th>
                <th>com desconto**</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>anúncio de venda</td>
                <td>0x</td>
                <td>R$0,00</td>
                <td>R$0,00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>anúncio pequeno</td>
                <td>1x</td>
                <td>R$15,00</td>
                <td>R$5,00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>anúncio largo</td>
                <td>2x</td>
                <td>R$20,00</td>
                <td>R$7,00</td>
              </tr>
              <tr>
                <td>4</td>
                <td>anúncio grande</td>
                <td>4x</td>
                <td>R$35,00</td>
                <td>R$15,00</td>
              </tr>
              <tr>
                <td>5</td>
                <td>anúncio página</td>
                <td>10x</td>
                <td>R$50,00</td>
                <td>R$20,00</td>
              </tr>
            </tbody>
          </Table>
          <h6>
            ** esses descontos são somente ao preço do anúncio no site, assim
            seria o preço do anúncio mais o preço com desconto do anúncio no
            site, a publicação saira em ambos
          </h6>
          <h3 className="mt-6">Ganhe um mês grátis no site</h3>
          <h6>* válido apenas para o site</h6>
          <h5>
            Para obter{" "}
            <span className="underline decoration-sky-500">
              2 mêses grátis no site
            </span>{" "}
            a única coisa que se tem que fazer é{" "}
            <span className="underline decoration-sky-500">
              solicitar uma poster com o QR code do site a{" "}
              <span className="font-['Playfair_Display'] italic text-lime-700">
                Rosa Maria
              </span>
            </span>
            , ou{" "}
            <span className="underline decoration-sky-500">
              imprimir e deixar em um local de fácil acesso
            </span>{" "}
            aos seus clientes
          </h5>
          <div className="flex items-center justify-center my-6">
            <h5 className="mr-3 uppercase">Imprima o QR code</h5>
            <Button
              className="!rounded-full !p-2"
              onClick={() => Router.push("/qrcode")}
            >
              {getIconsByName("md", "MdOutlineQrCode2", "32px")}
            </Button>
          </div>
          <h5>
            Entre em contato com{" "}
            <span className="font-['Playfair_Display'] italic text-lime-700">
              Rosa Maria
            </span>
          </h5>
          <h5>
            <div className="flex flex-col items-center justify-center">
              <a href={"mailto:informativoopcao@gmail.com"}>
                informativoopcao@gmail.com
              </a>
              <div>
                <b>
                  <a href={"tel:98898-6305"}>98898-6305</a>
                </b>{" "}
                <span className="font-['Playfair_Display'] italic">oi</span>
              </div>{" "}
              <div>
                <b>
                  <a href={"tel:99920-3720"}>99920-3720</a>
                </b>{" "}
                <span className="font-['Playfair_Display'] italic">vivo</span>
              </div>
            </div>
          </h5>
          <h6>
            envie a sua arte do seu anúncio e aguarde confirmação da publicação
          </h6>
        </Modal.Body>
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="rounded-0"
            onClick={handleCloseModal}
          >
            Fechar
          </Button>
        </div>
      </Modal>
      <Container className="text-center align-middle">
        <div className="h-screen flex justify-center items-center flex-column">
          <div className="w-full flex justify-end">
            <div className="w-[170px] h-[170px] stickerSize flex flex-col items-center justify-center rounded-full mr-24 -mb-24 rotate-[15deg] bg-white text-black drop-shadow-lg">
              <h5 className="font-[Montserrat] text-lime-400 m-2">
                <b>Quero Anunciar</b>
              </h5>
              <Button
                className="font-[Montserrat] !flex items-center stickerButton"
                variant="info"
                onClick={handleShowModal}
              >
                {getIconsByName("hi", "HiNewspaper")}{" "}
                <span className="sticker">&nbsp; Ver Preços</span>
              </Button>
              <h6 className="font-[Montserrat] mt-2 mx-8 text-xs sticker">
                descubra como ganhar 2 mêses grátis*
              </h6>
            </div>
          </div>
          <h5 className="font-[Montserrat] uppercase tracking-widest unselectable">
            O seu guia de compras
          </h5>
          {/* <h1 className="font-[Jost] unselectable text-[10rem]">
            <span className="font-thin">G</span>
            <span className="font-extralight">A</span>
            <span className="font-light">L</span>
            <span className="font-normal">E</span>
            <span className="font-light">R</span>
            <span className="font-extralight">I</span>
            <span className="font-thin">A</span>
          </h1> */}
          <h1 className="font-['Playfair_Display'] font-bold unselectable text-[25vw] tracking-tight uppercase titleLg hover:ping">
            Opção
          </h1>
          <h5 className="font-[Montserrat] unselectable">
            {monthDiff(efirst, today)}ª Edição <b>· {month}</b> de {yyyy}{" "}
            <span className="font-['Playfair_Display'] italic text-slate-200">
              versão virtual
            </span>{" "}
            <br />
          </h5>
          <h5 className="font-[Montserrat] unselectable text-clip overflow-hidden text-sm sm:text-xl">
            <span className="font-['Playfair_Display'] italic text-lime-400">
              Rosa Maria
            </span>{" "}
            <b>·</b>
            {/* <email> */}{" "}
            <a href={"mailto:informativoopcao@gmail.com"} className="">
              informativoopcao@gmail.com
            </a>
            {/* </email> */}{" "}
            <b>
              · <a href={"tel:98898-6305"}>98898-6305</a>
            </b>{" "}
            <span className="font-['Playfair_Display'] italic">oi</span>{" "}
            <b>
              · <a href={"tel:99920-3720"}>99920-3720</a>
            </b>{" "}
            <span className="font-['Playfair_Display'] italic">vivo</span>
          </h5>
        </div>
        <h5 className="mt-24 unselectable">
          <sub>
            <b className="font-[Playfair] uppercase">Opção</b>
          </sub>
        </h5>
        <h3 className="font-[Montserrat] unselectable">
          {month} de 20<b>{yyyy.toString().slice(2)}</b>
        </h3>
        <div className="flex justify-center">
          <div
            className="border-t-2 border-lime-400 my-4 w-40" /* size="2" width="5%" color="greenyellow" */
          />
        </div>
        <h6 className="font-[Montserrat] mb-9 uppercase tracking-widest unselectable">
          Informativo - Ano{" "}
          {romanize(
            today.getFullYear() -
              first.getFullYear() -
              (today.getMonth() === 9 ||
              today.getMonth() === 10 ||
              today.getMonth() === 11 ||
              today.getMonth() === 12
                ? 0
                : 1)
          )}{" "}
          - <b>{month}</b> de {yyyy} - Nº {romanize(monthDiff(first, today))}{" "}
          <br />
          São João Nepomuceno e Região - Minas Gerais <br />
        </h6>
      </Container>
    </>
  );
}
