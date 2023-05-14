import {
  Button,
  Col,
  Container,
  Overlay,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import AgAccountNavbar from "./agAccountNavbar";
import AgFootNotes from "./agFootNotes";
import AgGallery from "./agGallery";
import AgMainAccountAccordion from "./agMainAccountAccordion";
import AgNavbar from "./agNavbar";
import AgPreAccountAccordion from "./agPreAccountAccordion";
import AgTitle from "./agTitle";
import Animation from "./Animation";
import { useRef, useState } from "react";
import getIconsByName from "../functions/getIconsByName";

export default function AgIntro() {
  return (
    <>
      <AgNavbar />
      <AgAccountNavbar />
      <AgTitle />
      <AgGallery />
      <AgFootNotes />
    </>
  );
}
