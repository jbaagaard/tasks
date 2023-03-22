import * as S from "./Checkmark.styled";
import { Status } from "../types";

interface CheckmarkProps {
  value: Status;
  onChange: (value: Status) => void;
}
const Checkmark = ({ value, onChange }: CheckmarkProps) => {
  function handleOnClick() {
    if (value === "Not Started") onChange("In Progress");
    if (value === "In Progress") onChange("Done");
    if (value === "Done") onChange("Not Started");
  }

  return (
    <S.Checkmark status={value} onClick={handleOnClick}>
      {value === "Done" && "🗸"}
    </S.Checkmark>
  );
};

export default Checkmark;
