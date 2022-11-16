import { Form } from "react-bootstrap";
import CapBtn from "../elements/capBtn";
import CapForm from "../elements/capForm";

import useSWR from "swr";
import { AdFormatDTO } from "../pages/api/adformats";
import { useState } from "react";

export default function AgAdConfig({adO}: {adO: any}) {
    const [description, setDescription] = useState("");

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: adFormats, error: error2 } = useSWR<AdFormatDTO[]>(
        "/api/adformats",
        fetcher
    );

    if (!adFormats) return <>loading...</>;

    return <>
        <div className="flex items-center flex-column text-center">
            <div key="inline-radio" className="mb-3">
                {adFormats.map((af, i) => 
                    <Form.Check
                        key={i}
                        inline
                        label={af.name}
                        name="group1"
                        type="radio"
                        id={af._id}
                        checked={ adO ? adO.adFormatId === af._id ? true : false : false }
                    />
                )}
            </div>
            { adO ?
                <img src={adO.urls[0]} className="mt-3 w-64 mb-3" />
                : <h5 className="text-gray">Nenhuma Imagem<br/>selecionada ainda</h5>
            }
            <div className="flex">
                <CapBtn label="insertImage" iconType="md" icon="MdImage" css=" !m-0" />
                <CapBtn label="eraseAllImage" iconType="md" icon="MdHideImage" css=" !m-0" />
            </div>

            {/* <Button className="!rounded-none" variant="secondary" type="submit">
                Signup
            </Button>
            <Button className="!rounded-none" variant="secondary" type="submit">
                Signup
            </Button> */}

            {/* <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group> */}
            <div className="mt-6">
                <CapForm label="description" placeholder="description" value={adO ? adO.description : description} />
            </div>
            {/* <Button className="!rounded-none" variant="secondary" type="submit">
                Signup
            </Button> */}
            <CapBtn label="confirmNewAd" iconType="bs" icon="BsFileCheckFill" />
        </div>
    </>;
}