import { useInput } from "../../../hooks";
import { InputSc } from "./inputsc/styled";

export const InputForm = ({ refs }) => {
    const { value, onChange } = useInput();
    return <InputSc id="comment" className="foruminput" placeholder={"입력"} onChange={onChange} ref={refs} autocomplete="off" />;
};

