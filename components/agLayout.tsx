export default function AgLayout({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string | undefined;
}) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
