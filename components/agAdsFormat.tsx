import { Card, Col, Row } from "react-bootstrap";
import CapBtn from "../elements/capBtn";
import translantions from "../translations.json";

import Router from "next/router";
import { useRouter } from "next/router";

import useSWR from "swr";
import { AdFormatDTO } from "../pages/api/adformats";
import { useState } from "react";

export default function AgAdsFormat({
  adFormatProp,
  setAdFormatProp,
  adFormats,
}: {
  adFormatProp: any;
  setAdFormatProp: any;
  adFormats: AdFormatDTO[] | undefined;
}) {
  //const [adsFormat, setAdsFormat] = useState<AdFormatDTO>();

  /* const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: adFormats, error: error2 } = useSWR<AdFormatDTO[]>(
        "/api/adformats",
        fetcher
    ); */

  if (!adFormats) return <>loading...</>;

  return (
    <>
      <hr />
      <div className="overflow-auto smallScroll h-[75vh] shadow-xl py-2 border-slate-300">
        <Row className="mx-0">
          {adFormats ? (
            adFormats.map((af) => (
              <Col
                key={af._id}
                className="flex items-center justify-center mx-3 my-1.5"
              >
                <Card
                  className="!rounded-none mx-6 my-3 w-fit" //
                  border="dark"
                  onClick={() => Router.push(`/adformats/${af._id}/edit`)} //setAdFormatProp(af)
                >
                  <Card.Body>
                    <Card.Title>{af.name}</Card.Title>
                    <Card.Text>
                      {af.description} <br />
                      {translantions.brazilianCurrencySign["pt"]}{" "}
                      {af.amountCents / 100} <br />
                      {translantions.scales["pt"]} {af.width} x {af.height}
                    </Card.Text>
                    <div className="flex justify-center">
                      <CapBtn kind="remove" variant="danger" />
                      {/* <Button className="!rounded-none -mb-[1rem]">
                        Anderson
                    </Button> */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </div>
    </>
  );
}
