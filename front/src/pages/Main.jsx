import { Card } from "../component/card"
import { Loading } from "../component/loading"
import { Scroll } from "../component/scroll"

export const Main = () => {
    return (
        <>
            <Loading />
            <Scroll />
            <Card />
        </>
    )
}
