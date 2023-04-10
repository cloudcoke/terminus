import { useState } from "react"
import { useEffect } from "react"
import { Button } from "../button"
import { Graphy, Ranking, ranklists } from "./rank"
import { CardSt, CardWrapSt, Graph, Rank, GraphWrap } from "./styled"

export const Card = ({ rank }) => {
    const [rankState, setRankState] = useState()
    useEffect(() => {
        ranklists()
    }, [])
    return (
        <>
            <CardWrapSt>
                <GraphWrap height={26} flex>
                    <Rank>
                        <Ranking />
                    </Rank>
                    <Graph>
                        <Graphy rank={rank} />
                    </Graph>
                </GraphWrap>
                <CardSt height={10} flex>
                    <Button text="Contributors" long height="7" fontsize="2"></Button>
                </CardSt>
            </CardWrapSt>
        </>
    )
}
