import Header from "../../../../components/Header/header";
import useTitle from "../../../../components/Title/hook";
import TierOptions from "../../../../components/CreateMatch/make/tier";

export default function TierLimit() {
    const titleUpdater = useTitle("불러오는 중...");
    setTimeout(() => titleUpdater("티어 제한 선택 | DSM.GG"))
    
    return (
        <>
          <Header />
          <TierOptions />
        </>
    )
}