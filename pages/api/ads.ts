// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type AdDTO = {
    _id: string;
    description: string;
    adFormatId: string;
    urls: string[];
    order: {
        x: number;
        y: number;
    };
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AdDTO[]>
) {
    if (req.method === "PUT") {
        console.log(JSON.parse(req.body));
    }

    if (req.method === "POST") {
        res.status(201).json({} as AdDTO[]);
        return;
    }

    res.status(200).json([
        {
            _id: "60f1d442828335001559a296",
            description: "Mamburguer",
            adFormatId: "6209b62804dbe50016b07ccc",
            urls: [
                "https://images.unsplash.com/photo-1598828480848-0e82bce6659b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=899&q=80",
            ],
            order: { x: 0, y: 0 },
        },
        {
            _id: "60f1d44c828335001559a297",
            description: "Caneta azul",
            adFormatId: "6209b62804dbe50016b07ccc",
            urls: [
                "https://images.unsplash.com/photo-1568635845790-7a358e911b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            ],
            order: { x: 6, y: 4 },
        },
        {
            _id: "60f603e2557aac0015cca542",
            description: "Horlicks",
            adFormatId: "611872d13a1f1854a4681008",
            urls: [
                "https://www.livelaw.in/cms/wp-content/uploads/2018/12/Horlicks-and-Complan.jpg",
            ],
            order: { x: 0, y: 0 },
        },
        {
            _id: "60f61fe848a9e20015ae871a",
            description: "APAGAR Caneta azul",
            adFormatId: "611872d13a1f1854a4681008",
            urls: [
                "https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            ],
            order: { x: 6, y: 6 },
        },
        {
            _id: "60f74d8b9f3e6a0015b46a5d",
            description: "APAGAR Caneta azul",
            adFormatId: "611872d13a1f1854a4681008",
            urls: [
                "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80",
            ],
            order: { x: 6, y: 8 },
        },
        {
            _id: "61a0273dcd24bb001686e4cd",
            description: "Hamburguer Teste id service",
            adFormatId: "611872d13a1f1854a4681008",
            urls: [
                "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
            ],
            order: { x: 0, y: 4 },
        },
        {
            _id: "61b92ca6ff15c00016366596",
            description: "Hamburguer Teste id service",
            adFormatId: "611872d13a1f1854a4681008",
            urls: [
                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            ],
            order: { x: 0, y: 2 },
        },
        {
            _id: "61bbd708823d5200164b17cc",
            description: "Hamburguer Teste2",
            adFormatId: "61db2ec5b077530016af1ab0",
            urls: [
                "https://images.unsplash.com/photo-1557867535-202d7e2759fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            ],
            order: { x: 0, y: 6 },
        },
        {
            _id: "620ace6313589700166baf4b",
            description: "Editado2",
            adFormatId: "611872d13a1f1854a4681008",
            urls: ["https://images.unsplash.com/photo-1520637850086-fca99b2a39fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"],
            order: { x: 6, y: 0 },
        },
    ]);
}
