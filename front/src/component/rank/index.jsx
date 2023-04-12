import { Button } from "../button";
import { Forum } from "../forum";
import { Rank } from "./rank";
import { CardSt, CardWrapSt } from "./styled";

export const Card = ({ rank }) => {
    return (
        <>
            <CardWrapSt>
                <Forum />
                <Rank rank={rank} />

                <CardSt height={10} flex>
                    <Button text="Contributors" long height="7" fontsize="2"></Button>
                </CardSt>
            </CardWrapSt>
        </>
    );
};

