import * as S from "./TimeChanger.styled";
import { ChangeEvent, useState } from "react";
import Popup from "../Popup";

function formatTime(time: number) {
  return time / 60000;
}

function calculateTime(time: number) {
  return time * 60000;
}

interface TimeChangerProps {
  value: number;
  onAccept: (value: number) => void;
  onCancel: () => void;
}

const TimeChanger = ({ value, onAccept, onCancel }: TimeChangerProps) => {
  const [time, setTime] = useState<number | string>(formatTime(value));

  function handleTimeOnChange(e: ChangeEvent<HTMLInputElement>) {
    setTime(e.currentTarget.value);
  }

  function handleAcceptOnClick() {
    onAccept(calculateTime(+time));
  }

  return (
    <Popup onCancel={onCancel}>
      <S.Wrapper>
        <S.TimeWrapper>
          <S.Time value={time} onChange={handleTimeOnChange} />
          <S.TypeSelect>m</S.TypeSelect>
        </S.TimeWrapper>
        <S.AcceptButton onClick={handleAcceptOnClick}>set</S.AcceptButton>
      </S.Wrapper>
    </Popup>
  );
};

export default TimeChanger;
