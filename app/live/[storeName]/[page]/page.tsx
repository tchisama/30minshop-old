import StoreGenerator from "@/components/StoreGenerator";
import StoreGeneratorLive from "@/components/StoreGeneratorLive";

export default function Page({ params }: { params: any }) {
    return (
        <StoreGeneratorLive page={params.page} editable={false}/>
    )
}