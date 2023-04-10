import { List } from "./styled";
import { useEffect } from "react";
import { useState } from "react";

export const Forum = () => {
    const [category, setCategory] = useState("");
    useEffect(() => {
        const path = "/quiz/linux";
        const method = "get";
        console.log(category);
    }, []);

    return <div>forum</div>;
};

