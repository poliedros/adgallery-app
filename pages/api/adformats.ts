// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type AdFormatDTO = {
    _id: string;
    name: string;
    description: string;
    amountCents: number;
    priceId?: string;
    width: number;
    height: number;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AdFormatDTO[]>
) {
    if (req.method === "PUT") {
        console.log(JSON.parse(req.body));
    }

    if (req.method === "POST") {
        res.status(201).json({} as AdFormatDTO[]);
        return;
    }

    res.status(200).json([
        {
            _id: "611872d13a1f1854a4681008",
            name: "grande",
            description: "anuncio grande",
            amountCents: 1520,
            priceId: "price_1JOYbkAjbDFIkx3v1EqgMY52",
            width: 6,
            height: 2,
        },
        {
            _id: "61db2ec5b077530016af1ab0",
            name: "Grande",
            description: "anuncio grande anderson",
            amountCents: 2000,
            width: 5,
            height: 3,
        },
        {
            _id: "6209b62804dbe50016b07ccc",
            name: "Fall",
            description: "back",
            amountCents: 4321,
            width: 6,
            height: 2,
        },
        {
            _id: "620ad11413589700166baf4c",
            name: "Carlos",
            description: "Lopes Zansavio",
            amountCents: 1000,
            width: 3,
            height: 3,
        },
    ]);
}
