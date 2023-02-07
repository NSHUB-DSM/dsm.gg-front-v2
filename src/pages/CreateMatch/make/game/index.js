import React from "react";
import Header from "../../../../components/Header/header";
import SelectOptions from "../../../../components/CreateMatch/make/game";
import useTitle from "../../../../components/Title/hook";

export default function Make() {
    const titleUpdater = useTitle("불러오는 중...");
    setTimeout(() => titleUpdater("게임 종류 선택 | DSM.GG"))

    return (
        <>
            <Header />
            <SelectOptions />
        </>
    )
}