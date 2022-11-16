//import useUser from "lib/useUser";

import useSWR from "swr";
import { AdDTO } from "../../api/ads";
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

    const { data: adRes, error: errorAd } = useSWR<AdDTO>(
        id ? `/api/ads/${id}` : null
    );

    if (errorAd) return <div>failed to load1</div>;
    if (!adRes) return <div>loading...</div>;
    console.log(adRes);

    /* if (!user || user.isLoggedIn == false) {
        return <div>404</div>;
    } */

    const editAd = async (ad: AdDTO) => {
      const data = await fetch(`/api/ads/${id}`, {
          method: "PUT",
          body: JSON.stringify(ad),
      }); //.finally(() => setLoading(false));
      
      if (data.status === 200) {
          alert("Edited Ad");
      } else {
          setError("Edited Ad Fault");
      }
    };

    return (
        <>
            <AgMainAccountAccordion />
            <AgOffcanvasBase show={true} onHide={undefined} canvasType={"ad"} adO={adRes} submit={editAd} />
            {/* <AgModalBase show={true} onHide={undefined} modalType={"adConfig"} data={undefined} /> */}
            {/* <CountyRegistration
                language="pt"
                county={countyRes}
                onSubmit={editCounty}
            /> */}
            <>{error}</>
        </>
    );
}
