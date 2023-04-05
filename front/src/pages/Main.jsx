import { Card } from "../component/rank"
import { Loading } from "../component/loading"
import { Scroll } from "../component/scroll"
import styled from "styled-components"
import { useRef } from "react"
import { useState } from "react"

const Div = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    position: relative;
`
export const Main = () => {
    const mainWrap = useRef(null)
    const [rank, setRank] = useState(false)
    const handleScroll = (e) => {
        if (e.target.scrollTop > 400) {
            setRank(true)
        } else if (e.target.scrollTop < 300) {
            setRank(false)
        }
    }
    return (
        <>
            <Div ref={mainWrap} onScroll={handleScroll}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "pink",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "50%",
                    }}
                >
                    <Loading />
                    <Scroll />
                </div>
                <Card rank={rank} />
            </Div>
        </>
    )
}
