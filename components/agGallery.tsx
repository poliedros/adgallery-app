import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import useSWR from "swr";
import { AdDTO } from "../pages/api/ads";
import { AdFormatDTO } from "../pages/api/adformats";

import AgAdElement from "./agAdElement";
import { SetStateAction, useEffect, useState } from "react";
import RenderGallery from "./renderGallery";

export type cityValues =
  | "all"
  | "São João Nepomuceno"
  | "Descoberto"
  | "São João del-Rei"
  | "Rio Pomba";

export default function AgGallery() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: ads, error } = useSWR<AdDTO[]>("/api/ads", fetcher);

  const [name, setName] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [city, setCity] = useState("all");
  const [neighborhood, setNeighborhood] = useState("all");
  const [category, setCategory] = useState("all");

  const { data: adFormats, error: error2 } = useSWR<AdFormatDTO[]>(
    "/api/adformats",
    fetcher
  );

  // const [layout1, setLayout1] = useState<
  //   { i: string; x: number; y: number; w: number; h: number }[]
  // >([]);

  const [adsFinal, setAdsFinal] = useState(ads);
  const [adFormatsFinal, setAdFormatsFinal] = useState(adFormats);

  function defineLayout(): {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }[] {
    let layout: { i: string; x: number; y: number; w: number; h: number }[] =
      [];
    adsFinal?.map((ad, i, elem) => {
      i % 2 == 0
        ? adFormatsFinal
          ? layout.push({
              i: ad._id,
              x: ad.order.x,
              y: ad.order.y,
              w: adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
                ? adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
                    ?.width ?? 6
                : 6,
              h: adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
                ? adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
                    ?.height ?? 1
                : 1,
            })
          : undefined
        : adFormatsFinal
        ? layout.push({
            i: ad._id,
            x: ad.order.x,
            y: ad.order.y,
            w: adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
              ? adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
                  ?.width ?? 6
              : 6,
            h: adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
              ? adFormatsFinal.filter((af) => af._id == ad.adFormatId)[0]
                  ?.height ?? 2
              : 2,
          })
        : undefined;
    });
    return layout;
  }

  const [layoutFinal, setLayoutFinal] = useState({
    lg: defineLayout(),
  });

  useEffect(() => {
    const layout: {
      i: string;
      x: number;
      y: number;
      w: number;
      h: number;
    }[] = [];
    setLayoutFinal({
      lg: defineLayout(),
    });
    setAdsFinal([]);
    setAdsFinal(ads);
    setAdFormatsFinal(adFormats);
    setLayoutFinal({ lg: defineLayout() });
    // alert("Anderson");
  }, [ads]);

  useEffect(() => {
    setAdsFinal(
      ads?.filter(
        (ad) =>
          ((ad.title
            ? ad.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
            : true) ||
            ((ad.subtitle
              ? ad.subtitle
                  .toLocaleLowerCase()
                  .includes(name.toLocaleLowerCase())
              : true) &&
              ad.subtitle !== "")) &&
          (delivery ? ad.delivery === true : true) &&
          (city !== "all"
            ? ad.city
              ? ad.city.toLocaleLowerCase().includes(city.toLocaleLowerCase())
              : false
            : true)
        //   &&
        // (neighborhood
        //   ? neighborhood !== "Não Definido"
        //     ? ad.neighborhood === neighborhood
        //     : ad.neighborhood === ""
        //   : true)
      )
    );
  }, [name, delivery, city]);

  useEffect(() => {
    setAdFormatsFinal(adFormats);
    setLayoutFinal({ lg: defineLayout() });
  }, [adsFinal]);

  useEffect(() => {
    generateGrid();
  }, [layoutFinal]);

  function generateGrid() {
    return adsFinal !== undefined && adsFinal.length > 0 ? (
      <ResponsiveReactGridLayout
        isDraggable={false}
        isResizable={false}
        className="layout"
        layouts={layoutFinal}
        breakpoints={{ lg: 0 }}
        cols={{ lg: 12 }}
        rowHeight={235}
        width={0}
        style={{ zIndex: -1 }}
      >
        {adsFinal.map((ad) =>
          ad.urls[0] ? (
            <div key={ad._id ?? ""}>
              <AgAdElement ad={ad} />
            </div>
          ) : (
            <></>
          )
        )}
      </ResponsiveReactGridLayout>
    ) : (
      <></>
    );
  }

  function defineAll() {
    setAdsFinal(ads);
    setAdFormatsFinal(adFormats);
  }

  function currenteighborhood() {
    let array: string[] = [];
    adsFinal
      ? adsFinal?.map((ad) => {
          array.push(ad.neighborhood ? ad.neighborhood : "Não Definido");
        })
      : [];
    return Array.from(new Set(array));
  }

  if (!ads || !adFormats) {
    return (
      <>
        <div className="flex items-center items-center">
          <h2>Carregando</h2>
        </div>
      </>
    );
  }
  // else {
  //   let vl = true;
  //   if (vl) {
  //     setAdsFinal(ads);
  //     setAdFormatsFinal(adFormats);
  //     vl = false;
  //   }
  // }

  return (
    <>
      <Container>
        <Form className="font-[Montserrat]">
          <Row>
            <Form.Label className="!text-left uppercase tracking-widest">
              Procurar
            </Form.Label>
            <Form.Group as={Col} md={12} className="mb-3" controlId="input1">
              <Form.Control
                type="text"
                placeholder="por nome"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            {/* <Form.Group as={Col} md={6} className="mb-3" controlId="input2">
              <Form.Control type="text" placeholder="por atividade" />
            </Form.Group> */}
          </Row>
          <Row className="flex justify-center items-center mb-3 flex-col md:flex-row">
            <Col className="flex items-center justify-center">
              <h6 className="m-0 hidden md:flex">cidade</h6>
              <Button
                className={
                  "!rounded-full !p-0 w-[45px] h-[45px] border-0 mx-3 " +
                  (city === "São João Nepomuceno" || city === "all"
                    ? "grayscale-0"
                    : "grayscale")
                }
                style={{
                  backgroundImage: "url('./sjn.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center center",
                }}
                onClick={() =>
                  city === "São João Nepomuceno"
                    ? setCity("all")
                    : setCity("São João Nepomuceno")
                }
              ></Button>
              <Button
                className={
                  "!rounded-full !p-0 w-[45px] h-[45px] border-0 mr-3 " +
                  (city === "Descoberto" || city === "all"
                    ? "grayscale-0"
                    : "grayscale")
                }
                style={{
                  backgroundImage: "url('./desc.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center center",
                }}
                onClick={() =>
                  city === "Descoberto" ? setCity("all") : setCity("Descoberto")
                }
              ></Button>
              <Button
                className={
                  "!rounded-full !p-0 w-[45px] h-[45px] border-0 mr-3 " +
                  (city === "São João del-Rei" || city === "all"
                    ? "grayscale-0"
                    : "grayscale")
                }
                style={{
                  backgroundImage: "url('./sjdr.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center center",
                }}
                onClick={() =>
                  city === "São João del-Rei"
                    ? setCity("all")
                    : setCity("São João del-Rei")
                }
              ></Button>
              <Button
                className={
                  "!rounded-full !p-0 w-[45px] h-[45px] border-0 " +
                  (city === "Rio Pomba" || city === "all"
                    ? "grayscale-0"
                    : "grayscale")
                }
                style={{
                  backgroundImage: "url('./rp.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center center",
                }}
                onClick={() =>
                  city === "Rio Pomba" ? setCity("all") : setCity("Rio Pomba")
                }
              ></Button>
            </Col>
            {/* <Col>
              <Form.Select
                className="my-3 md:my-0"
                onChange={(e: any) => setNeighborhood(e.target.value)}
              >
                {/* <Form.Control type="text" placeholder="por bairro" disabled /> /}
                {adsFinal ? (
                  currenteighborhood().map((ad, i) => (
                    <option key={i}>{String(ad)}</option>
                  ))
                ) : (
                  <></>
                )}
              </Form.Select>
            </Col> */}
            <Col>
              <Form.Check
                className="!flex justify-center"
                type={"checkbox"}
                onChange={(e: any) => {
                  setDelivery(!delivery);
                }} //setDelivery(e)
                label={<span className="ml-2">disk entrega / delivery</span>}
                id={"checkbox1"}
              />
            </Col>
          </Row>
        </Form>
        {/* {JSON.stringify(adsFinal)}
        <p>---</p>
        {JSON.stringify(adFormatsFinal)}
        <p>---</p>
        {JSON.stringify(layoutFinal)} */}
        {RenderGallery(adsFinal, adFormatsFinal, layoutFinal)}
        {/* {generateGrid()} */}
      </Container>
    </>
  );
}
