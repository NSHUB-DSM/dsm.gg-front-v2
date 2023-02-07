import React from "react";
import Header from "../../../../components/Header/header";
import SelectOptions from "../../../../components/CreateMatch/make/game";
import useTitle from "../../../../components/Title/hook";

export default function Make() {
    const titleUpdater = useTitle("불러오는 중...");
    setTimeout(() => titleUpdater("매칭 생성 상세 | DSM.GG"))

    return (
        <>
            <Header />
            <SelectOptions />
        </>
    )
}