//import useUser from "lib/useUser";

import useSWR from "swr";
import { AdFormatDTO } from "../../api/adformats";
import { useState } from "react";
import { useRouter } from "next/router";
import AgModalBase from "../../../components/agModalBase";
import AgMainAccountAccordion from "../../../components/agMainAccountAccordion";
import AgOffcanvasBase from "../../../components/agOffcanvasBase";

export default function Edit() {
    //const { user } = useUser({ redirectTo: "/login" });

    const [error, setError] = useState("");

    const router = useRouter();
    const { id } = router.query;

    /* let idNumber = 0;
    if (id) idNumber = parseInt(String(id).padStart(3, "0")); */

    const { data: adFormatRes, error: errorAdFormat } = useSWR<AdFormatDTO>(
        id ? `/api/adformats/${id}` : null
    );

    if (errorAdFormat) return <div>failed to load</div>;
    if (!adFormatRes) return <div>loading...</div>;

    /* if (!user || user.isLoggedIn == false) {
        return <div>404</div>;
    } */

    const editAdFormat = async (adFormat: AdFormatDTO) => {
      const data = await fetch(`/api/adformats/${id}`, {
          method: "PUT",
          body: JSON.stringify(adFormat),
      }); //.finally(() => setLoading(false));
      if (data.status === 200) {
          alert("Edited AdFormat");
      } else {
          setError("Edited AdFormat Fault");
      }
    };

    return (
        <>
            <AgMainAccountAccordion />
            <AgOffcanvasBase show={true} onHide={undefined} canvasType={"adFormat"} aF={adFormatRes} submit={editAdFormat} />
            {/* <AgModalBase show={true} onHide={undefined} modalType={"adsFormat"} data={undefined} /> */}
            {/* <CountyRegistration
                language="pt"
                county={countyRes}
                onSubmit={editCounty}
            /> */}
            <>{error}</>
        </>
    );
}