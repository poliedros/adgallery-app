import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AdFormatDTO } from "../pages/api/adformats";
import { AdDTO } from "../pages/api/ads";

import translations from "../translations.json";
import AgAdConfig from "./agAdConfig";
import AgAdFormat from "./agAdFormat";
import AgAds from "./agAds";
import AgAdsFormat from "./agAdsFormat";
import AgChangeAdStatus from "./agChangeAdStatus";
import AgOrderAds from "./agOrderAds";

export default function AgOffcanvasBase({
    show,
    onHide,
    canvasType,
    adO,
    ads,
    aF,
    aFs,
    submit
}: {
    show: boolean;
    onHide: any;
    canvasType: string;
    adO?: AdDTO;
    ads?: AdDTO[];
    aF?: AdFormatDTO;
    aFs?: AdFormatDTO[];
    submit?: any;
}) {
    const [showOC, setShowOC] = useState(show);
    return (
        <>
            {/* <Offcanvas className="opacity-70 !w-[75%] h-[90%] !border-transparent blur" show={true} placement="end">
            <Offcanvas.Header>
            <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            </Offcanvas.Body>
            </Offcanvas> */}
            <Offcanvas
                className="!w-[75%] my-3 mr-12"
                show={showOC /* show */}
                onHide={() => setShowOC(false) /* onHide */}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {/* {canvasType === "adsFormat" ? (
                            translations.adFormatConfig.pt
                        ) : canvasType === "adConfig" ? (
                            translations.adConfig.pt
                        ) : canvasType === "changeAdStatus" ? (
                            translations.changeAdStatus.pt
                        ) : canvasType === "orderAds" ? (
                            translations.orderAd.pt
                        ) : (
                            <></>
                        )} */}
                        {canvasType === "ad" ? (
                            translations.adFormatConfig.pt
                        ) : canvasType === "ads" ? (
                            translations.adConfig.pt
                        ) : canvasType === "adFormat" ? (
                            translations.changeAdStatus.pt
                        ) : canvasType === "adsFormat" ? (
                            translations.orderAd.pt
                        ) : canvasType === "orderAds" ? (
                            translations.orderAd.pt
                        ) : canvasType === "orderAds" ? (
                            translations.orderAd.pt
                        ) : (
                            <></>
                        )}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <AgAdConfig adO={adO}  /> */} {/* adO={ad} */}
                    
                    {canvasType === "ad" ? (
                        <AgAdConfig adO={adO} />
                    ) : canvasType === "ads" ? (
                        <AgAds setAdProp={undefined} ads={ads} submitAd={submit} />
                    ) : canvasType === "adFormat" ? (
                        <AgAdFormat adF={aF} />
                    ) :canvasType === "adChangeStatus" ? (
                        <AgChangeAdStatus adO={adO} />
                    ) : canvasType === "adsFormat" ? (
                        <AgAdsFormat adFormatProp={undefined} setAdFormatProp={undefined} adFormats={aFs} />
                    ) : canvasType === "orderAds" ? (
                        <AgOrderAds show={true} onHide={undefined} closeModal={undefined} />
                    ) : (
                        <></>
                    )}
                    {/* <AgAdsFormat adFormatProp={undefined} setAdFormatProp={undefined} /> */}
                    {/* <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1572181330858-13fd026f94a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')] bg-cover bg-center">
                    <div className="w-full h-full flex flex-col justify-center items-center"> {/* backdrop-blur-sm /}
                    <h3 className="text-2xl text-orange-400">HI THERE</h3>
                    <h1 className="mt-5 text-center text-4xl text-white font-semibold drop-shadow-lg">WELCOME TO
                    <span className="text-yellow-300">KINDACODE.COM</span></h1>
                    </div>
                    </div> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
