import { useRouter } from "next/router";

export default function AgLayout({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string | undefined;
}) {
    const router = useRouter();
    console.log(router);

    return (
        <>{children}</>
    );
}