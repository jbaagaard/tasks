import * as S from "./TimeChanger.styled";
import { ChangeEvent, useState } from "react";
import Popup from "../Popup";

function getTimeType(time: number) {
  let seconds = time / 1000;
  if (seconds < 60) return "s";
  else if (seconds < 3600) return "m";
  else return "h";
}

function formatTime(time: number) {
  let seconds = time / 1000;
  if (seconds < 60) return Math.floor(seconds);
  else if (seconds < 3600) return Math.floor(seconds / 60);
  else return Math.round(seconds / 360) / 10;
}

function calculateTime(time: number, type: string) {
  if (type === "s") return time * 1000;
  else if (type === "m") return time * 60000;
  else return time * 3600000;
}

interface TimeChangerProps {
  value: number;
  onAccept: (value: number) => void;
  onCancel: () => void;
}

const TimeChanger = ({ value, onAccept, onCancel }: TimeChangerProps) => {
  const [type, setType] = useState(getTimeType(value));
  const [time, setTime] = useState(formatTime(value));

  function handleSelectOnChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.currentTarget.value);
    setType(e.currentTarget.value);
  }

  function handleTimeOnChange(e: ChangeEvent<HTMLInputElement>) {
    setTime(+e.currentTarget.value);
  }

  function handleAcceptOnClick() {
    onAccept(calculateTime(time, type));
  }

  return (
    <Popup onCancel={onCancel}>
      <S.Wrapper>
        <S.TimeWrapper>
          <S.Time value={time} onChange={handleTimeOnChange} />
          <S.TypeSelect onChange={handleSelectOnChange}>
            <S.TypeOption value={"s"}>s</S.TypeOption>
            <S.TypeOption value={"m"}>m</S.TypeOption>
            <S.TypeOption value={"h"}>h</S.TypeOption>
          </S.TypeSelect>
        </S.TimeWrapper>
        <S.AcceptButton onClick={handleAcceptOnClick}>set</S.AcceptButton>
      </S.Wrapper>
    </Popup>
  );
};

export default TimeChanger;
