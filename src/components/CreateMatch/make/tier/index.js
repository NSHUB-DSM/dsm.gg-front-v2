import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopSpace } from '../game';

const TierOptions = () => {
    const tierList = [
        {
            id: 0,
            name: '선택하기'
        },
        {
            id: 1,
            name: '아이언',
        },
        {
            id: 2,
            name: '브론즈'
        },
        {
            id: 3,
            name: '실버'
        },
        {
            id: 4,
            name: '골드'
        },
        {
            id: 5,
            name: '플래티넘'
        },
        {
            id: 6,
            name: '다이아몬드'
        },
        {
            id: 7,
            name: '마스터'
        },
        {
            id: 8,
            name: '그랜드마스터'
        },
        {
            id: 9,
            name: '챌린저'
        }
    ]

    const [tier, setTier] = useState("");
    const [isSelect, setIsSelect] = useState(false);
    const navigate = useNavigate();

    return (
        <>
          <TopSpace />
        </>
    )
}

export default TierOptions;