import StoreGenerator from "@/components/StoreGenerator";
import StoreGeneratorLive from "@/components/StoreGeneratorLive";

export default function Page({ params }: { params: any }) {
    return (
        <StoreGeneratorLive  storeName={params.storeName}  page={""} editable={false}/>
    )
}