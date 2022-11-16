import { NextApiRequest, NextApiResponse } from "next";
import { AdDTO } from "../ads";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AdDTO>
) {
    if (req.method === "PUT") {
        res.status(200).json({} as AdDTO)
        return;
    }

    if (req.method === "DELETE") {
        res.status(200).json({} as AdDTO)
        return;
    }

    if (req.query.id !== "60f1d442828335001559a296") {
        res.status(404).json({} as AdDTO);
        return;
    }

    res.status(200).json({
        _id: "60f1d442828335001559a296",
        description: "Mamburguer",
        adFormatId: "6209b62804dbe50016b07ccc",
        urls: [
            "https://images.unsplash.com/photo-1598828480848-0e82bce6659b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=899&q=80",
        ],
        order: { x: 0, y: 0 },
    });
}
