export default function AgAd({url, title}: {url: string, title: string}) {
    return <>
        <div className="flex flex-column items-center">
            <img className="w-[50vw] mt-[-64px]" src={url} />
            <h4>{title}</h4>
        </div>
    </>;
}