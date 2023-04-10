import { useEffect, useState } from "react"
import request from "../../../utils/request"
import { Bar, Graph, GraphWrap, RankWarp } from "../styled"

const Ranking = (rankState) => {
    const Div = rankState.map((v, i) => (
        <div key={i}>
            {/* <div>{i + 1}</div> */}
            <p>{v.userId}</p>
        </div>
    ))
    return <>{Div}</>
}
const Graphy = ({ rank, rankState }) => {
    console.log(rankState)
    const Div = rankState.map((v, i) => (
        <div key={i}>
            <div className="backgroundBar">
                <Bar point={v.totalPoints} rank={rank}>
                    {v.totalPoints}/600
                </Bar>
            </div>
        </div>
    ))
    return <>{Div}</>
}

export const Rank = ({ rank }) => {
    const [rankState, setRankState] = useState([])

    const ranklists = async () => {
        const response = await request.get("/user/ranking")
        if (response.data) {
            setRankState(response.data)
        }
    }
    useEffect(() => {
        ranklists()
    }, [])
    return (
        <GraphWrap height={26} flex>
            <RankWarp>{Ranking(rankState)}</RankWarp>
            <Graph>{Graphy({ rank, rankState })}</Graph>
        </GraphWrap>
    )
}
