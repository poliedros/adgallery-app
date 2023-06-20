import { Card, Col, Row } from "react-bootstrap";

import useSWR from "swr";
import { AdDTO } from "../pages/api/ads";

import CapBtn from "../elements/capBtn";
import Router from "next/router";

export default function AgAds({
  setAdProp,
  ads,
  submitAd,
}: {
  setAdProp: any;
  ads: AdDTO[] | undefined;
  submitAd?: any;
}) {
  const editAd = (i: string) => {
    Router.push(`/ads/${i}/edit`);
  };

  const statusAd = (i: string) => {
    Router.push(`/ads/${i}/status`);
  };

  /* const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: ads, error } = useSWR<AdDTO[]>(
        "/api/ads",
        fetcher
    );

    if (!ads) return <>loading...</>; */

  return (
    <>
      <hr />
      <div className="overflow-auto smallScroll h-[75vh] shadow-xl py-2 border-slate-300">
        <Row className="mx-0">
          {ads ? (
            ads.map((ad, i) => (
              <Col
                key={i}
                className="flex items-center justify-center mx-3 my-1.5"
              >
                <Card
                  className="!rounded-none w-64" //mx-6 my-3
                  border="dark"

                  //onClick={
                  //    () => editAd(ad._id) /* () => setAdProp(ad) */
                  //}
                >
                  <Card.Body>
                    <img
                      src={ad.urls[0]}
                      className="-mt-4"
                      onLoad={() => {
                        <h2>carregando</h2>;
                      }}
                    />
                    <Card.Title>{ad.description}</Card.Title>
                    <div className="flex flex-column items-end">
                      <CapBtn
                        label="edit"
                        iconType="ri"
                        icon="RiEditBoxFill"
                        css="!mb-0 -mr-[1rem]"
                        click={() => editAd(ad._id)}
                      />
                      <CapBtn
                        label="status"
                        iconType="md"
                        icon="MdCircle"
                        css="!mb-1 -mr-[1rem]"
                        click={() => statusAd(ad._id)}
                      />
                    </div>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </Card.Text> */}
                    <div className="flex justify-center">
                      <CapBtn kind="remove" variant="danger" />
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
