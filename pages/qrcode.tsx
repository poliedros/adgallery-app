import { Button } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";

import Router from "next/router";

export default function Qrcode() {
  return (
    <>
      <div className="flex flex-col items-center justify-center print">
        <h2 className="font-[Montserrat] uppercase">Estamos no</h2>
        <h1 className="font-['Playfair_Display'] font-bold unselectable text-[6rem] uppercase">
          OPÇÃO
        </h1>
        <img className="my-6 printImg" src="/qrOPoriginal.png" />
        <h3 className="font-[Montserrat] text-center">
          O seu guia de compras online, <br /> sempre com anúncios das região
        </h3>
        <div className="noPrint">
          <Button
            className="!rounded-full !p-2 my-3 mr-3"
            variant="secondary"
            onClick={() => {
              window.print();
            }}
          >
            {getIconsByName("hi", "HiPrinter", "32px")}
          </Button>
          <Button
            className="!rounded-full !p-2 my-3"
            onClick={() => Router.push("/")}
          >
            {getIconsByName("ri", "RiHome3Fill", "32px")}
          </Button>
        </div>
        <h6 className="noPrint">
          Imprima comente conosco e ganhe 2 mesês grátis
        </h6>
      </div>
    </>
  );
}
