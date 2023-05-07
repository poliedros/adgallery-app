import { SetStateAction, useEffect, useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import CapBtn from "../elements/capBtn";
import { AdDTO } from "../pages/api/ads";

import translations from "../translations.json";
import AgAd from "./agAd";
import AgAdConfig from "./agAdConfig";
import AgAdFormat from "./agAdFormat";
import AgAds from "./agAds";
import AgAdsFormat from "./agAdsFormat";
import AgChangeAdStatus from "./agChangeAdStatus";
import AgOrderAds from "./agOrderAds";

export default function AgModalBase({
  show,
  onHide,
  modalType,
  adO,
  ads,
  data = {},
}: {
  show: boolean;
  onHide: any;
  modalType: string;
  adO?: AdDTO;
  ads?: AdDTO[];
  data: any;
}) {
  /* const [showModal, setShow] = useState(show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

  const [adFormat, setAdFormat] = useState();
  const [ad, setAd] = useState();

  useEffect(() => {
    setAdFormat(adFormat);
  }, [adFormat]);

  useEffect(() => {
    setAd(ad);
  }, [ad]);

  console.log("JOSE MARIA TRINDADE");
  console.log(ad);

  return (
    <>
      <Modal
        //{...props}
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="border-0 z-10 flex flex-col-reverse"
          closeButton
        >
          <h5 className="uppercase tracking-wider -mb-3">
            {modalType === "adsFormat" ? (
              translations.adFormatConfig.pt
            ) : modalType === "adConfig" ? (
              translations.adConfig.pt
            ) : modalType === "changeAdStatus" ? (
              translations.changeAdStatus.pt
            ) : modalType === "orderAds" ? (
              translations.orderAd.pt
            ) : (
              <></>
            )}
          </h5>
        </Modal.Header>
        {/* <Modal.Title className="text-center uppercase tracking-wider" id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title> */}
        <Modal.Body>
          <div className="flex items-center justify-evenly">
            {modalType === "ad" ? (
              <AgAd url={data.url} title={data.title} data={data} />
            ) : modalType === "adsFormat" ? (
              <>
                <Row className="items-center">
                  <Col>
                    <AgAdFormat adF={adFormat} />
                  </Col>
                  <Col>
                    <AgAdsFormat
                      adFormatProp={adFormat}
                      setAdFormatProp={(af: any) => setAdFormat(af)}
                      adFormats={undefined}
                    />
                  </Col>
                </Row>
              </>
            ) : modalType === "adConfig" ? (
              <>
                <Row className="items-center">
                  <Col>
                    <AgAdConfig adO={adO} /* adO={ad} */ />
                  </Col>
                  <Col>
                    <AgAds ads={ads} setAdProp={(a: any) => setAd(a)} />
                  </Col>
                </Row>
              </>
            ) : modalType === "changeAdStatus" ? (
              <>
                <Row className="items-center">
                  <Col>
                    <AgChangeAdStatus adO={ad} />
                  </Col>
                  <Col>
                    <AgAds ads={ads} setAdProp={(a: any) => setAd(a)} />
                  </Col>
                </Row>
              </>
            ) : modalType === "orderAds" ? (
              <AgOrderAds
                show={true}
                onHide={undefined}
                closeModal={undefined}
              />
            ) : (
              <></>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 !justify-center !p-0">
          {/* <Button className="!rounded-none !m-0" onClick={onHide}>
                        {translations.close["pt"]}
                    </Button> */}
          <CapBtn kind="close" css="!m-0" click={onHide} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
