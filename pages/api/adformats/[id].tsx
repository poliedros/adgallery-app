import { NextApiRequest, NextApiResponse } from "next";
import { AdFormatDTO } from "../adformats";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AdFormatDTO>
) {
    if (req.method === "PUT") {
        res.status(200).json({} as AdFormatDTO)
        return;
    }

    if (req.method === "DELETE") {
        res.status(200).json({} as AdFormatDTO)
        return;
    }

    if (req.query.id !== "611872d13a1f1854a4681008") {
        res.status(404).json({} as AdFormatDTO);
        return;
    }

    res.status(200).json({
        _id: "611872d13a1f1854a4681008",
        name: "grande",
        description: "anuncio grande",
        amountCents: 1520,
        priceId: "price_1JOYbkAjbDFIkx3v1EqgMY52",
        width: 6,
        height: 2,
    });
}
