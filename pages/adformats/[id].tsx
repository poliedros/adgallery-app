//import useUser from "lib/useUser";
import { useRouter } from "next/router";
import useSWR from "swr";
import { AdFormatDTO } from "../api/adformats";
import AgModalBase from "../../components/agModalBase";
import AgMainAccountAccordion from "../../components/agMainAccountAccordion";
import AgOffcanvasBase from "../../components/agOffcanvasBase";
import AgAccountNavbar from "../../components/agAccountNavbar";
import AgNavbar from "../../components/agNavbar";

export default function Get() {
  const router = useRouter();
  const { id } = router.query;

  const { data: adFormat, error } = useSWR<AdFormatDTO>(`/api/adformats/${id}`);

  /* const { user } = useUser({ redirectTo: "/login" }); 

  if (!user || user.isLoggedIn == false) {
    return <div>404</div>;
  } */

  if (error) return <div>Not Found</div>;
  if (!adFormat) return <div>loading...</div>;

  return (
    <>
      {/* <AgModalBase show={true} onHide={undefined} modalType={"adsFormat"} data={undefined} /> */}
      {/* <CountyProfile county={county} /> */}
      <div className="bg-black">
          <AgNavbar />
          <AgAccountNavbar />
          <AgMainAccountAccordion />
          <AgOffcanvasBase show={true} onHide={undefined} canvasType={"adFormat"} aF={adFormat} />
      </div>
    </>
  );
}