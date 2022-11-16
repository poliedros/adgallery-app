//import useUser from "lib/useUser";
import { useRouter } from "next/router";
import useSWR from "swr";
import { AdDTO } from "../api/ads";
import AgModalBase from "../../components/agModalBase";
import AgOffcanvasBase from "../../components/agOffcanvasBase";
import AgMainAccountAccordion from "../../components/agMainAccountAccordion";
import AgNavbar from "../../components/agNavbar";
import AgAccountNavbar from "../../components/agAccountNavbar";

export default function Get() {
  const router = useRouter();
  const { id } = router.query;

  const { data: ad, error } = useSWR<AdDTO>(`/api/ads/${id}`);

  /* const { user } = useUser({ redirectTo: "/login" }); 

  if (!user || user.isLoggedIn == false) {
    return <div>404</div>;
  } */

  if (error) return <div>Not Found</div>;
  if (!ad) return <div>loading...</div>;

  return (
    <>
      {/* <AgModalBase show={true} onHide={undefined} modalType={"adConfig"} data={undefined} adO={ad} /> */}
      {/* <AgMainAccountAccordion />
      <AgOffcanvasBase show={true} onHide={undefined} canvasType={"ad"} adO={ad} /> */}
      <div className="bg-black">
          <AgNavbar />
          <AgAccountNavbar />
          <AgMainAccountAccordion />
          <AgOffcanvasBase show={true} onHide={undefined} canvasType={"ad"} adO={ad} />
      </div>
      {/* <CountyProfile county={county} /> */}
    </>
  );
}
