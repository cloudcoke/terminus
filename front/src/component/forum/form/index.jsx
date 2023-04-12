import { useInput } from "../../../hooks";
import { InputSc } from "./inputsc/styled";

export const InputForm = ({ refs, id, values }) => {
    const { value, onChange } = useInput();
    return <InputSc id={id} defaultValue={values} className="foruminput" placeholder={"입력"} onChange={onChange} ref={refs} autocomplete="off" />;
};

