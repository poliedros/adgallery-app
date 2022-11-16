import { Container } from "react-bootstrap";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import useSWR from "swr";
import { AdDTO } from "../pages/api/ads";
import { AdFormatDTO } from "../pages/api/adformats";

import AgAdElement from './agAdElement';

export default function AgGallery() {

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: ads, error } = useSWR<AdDTO[]>(
        "/api/ads",
        fetcher
    );

    const { data: adFormats, error: error2 } = useSWR<AdFormatDTO[]>(
        "/api/adformats",
        fetcher
    );

    let layout1: { i: string; x: number; y: number; w: number; h: number; }[] = [];

    ads ? ads.map(function myFunction(value, index, array) {
        if (index % 2 == 0)
            adFormats ? layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormats.filter(af => af._id == value.adFormatId)[0] ? adFormats.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormats.filter(af => af._id == value.adFormatId)[0] ? adFormats.filter(af => af._id == value.adFormatId)[0]?.height ?? 1 : 1 }) : null
        else
            adFormats ? layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormats.filter(af => af._id == value.adFormatId)[0] ? adFormats.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormats.filter(af => af._id == value.adFormatId)[0] ? adFormats.filter(af => af._id == value.adFormatId)[0]?.height ?? 2 : 2 }) : null
    }) : null;

    let layout = { lg: layout1 };

    if (!ads || !adFormats) return <>loading...</>;

    return <>
        <Container>
            <ResponsiveReactGridLayout
                isDraggable={false}
                isResizable={false}
                className="layout"
                layouts={layout}
                breakpoints={{ lg: 1200 }}
                cols={{ lg: 12 }}
                rowHeight={235}
                width={1000}
                style={{ zIndex: -1 }}
            >
                {
                    ads.map(ad => ad.urls[0] ?
                        <div key={ad._id ?? ""}>
                            <AgAdElement ad={ad} />
                        </div>
                        :
                        <></>
                    )
                }
            </ResponsiveReactGridLayout>
        </Container>
    </>;
}