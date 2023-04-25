import Router from "next/router";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion, Button, Offcanvas } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translantions from "../translations.json";
import AgModalBase from "./agModalBase";

export default function AgMainAccountAccordion() {
  const [show, setShow] = useState(false);
  const [base, setBase] = useState("");
  const [type, setType] = useState("");

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showAdsFormat = () => {
    setShow(true);
    setType("adsFormat");
  };
  const showAdConfig = () => {
    /* setShow(true); setType('adConfig') */
  };
  const showChangeAdStatus = () => {
    setShow(true);
    setType("changeAdStatus");
  };
  const showOrderAds = () => {
    setShow(true);
    setType("orderAds");
  };

  return (
    <>
      <div className="h-screen flex justify-start items-center ml-4">
        <Accordion className="flex flex-column" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {getIconsByName("bs", "BsPersonCircle", "32px")} &nbsp;{" "}
              {translantions.accountDate["pt"]} &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <div onClick={handleShow}>
                {getIconsByName("bs", "BsPersonCircle", "32px")}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {getIconsByName("bs", "BsFileEarmarkImage", "32px")} &nbsp;{" "}
              {translantions.adFormatConfig["pt"]} &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <h5
                className="flex items-center"
                onClick={() => Router.push("/adformats/create")}
              >
                {getIconsByName("bs", "BsFillFileEarmarkImageFill", "32px")}{" "}
                &nbsp; {translantions.createAdFormat["pt"]}
              </h5>
              <h5
                className="flex items-center"
                onClick={() => Router.push("/adformats")}
              >
                {getIconsByName("bs", "BsFillFileEarmarkImageFill", "32px")}{" "}
                &nbsp; {translantions.showAdFormats["pt"]}
              </h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {getIconsByName("bs", "BsImage", "32px")} &nbsp;{" "}
              {translantions.adConfig["pt"]} &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <h5
                className="flex items-center"
                onClick={() => Router.push("/ads/create")}
              >
                {getIconsByName("bs", "BsImageFill", "32px")} &nbsp;{" "}
                {translantions.createAd["pt"]}
              </h5>
              <h5
                className="flex items-center"
                onClick={() => Router.push("/ads")}
              >
                {getIconsByName("bs", "BsImageFill", "32px")} &nbsp;{" "}
                {translantions.showAds["pt"]}
              </h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {getIconsByName("bs", "BsImages", "32px")} &nbsp;{" "}
              {translantions.adGallery["pt"]} &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              {/* <h5 className="flex items-center" onClick={showChangeAdStatus}>{ getIconsByName('bs', 'BsFileImageFill', '32px') } &nbsp; { translantions.changeAdStatus['pt'] }</h5> */}
              <h5
                className="flex items-center"
                onClick={() =>
                  Router.push("/ads/order")
                } /* onClick={showOrderAds} */
              >
                {getIconsByName("io", "IoMdImages", "32px")} &nbsp;{" "}
                {translantions.orderAd["pt"]}
              </h5>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <AgModalBase
        show={show}
        onHide={handleClose}
        modalType={type}
        /* show={show} base={''} */ data={undefined} /* show={show} base={''} */
      />
    </>
  );
}
