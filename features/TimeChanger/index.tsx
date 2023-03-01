import * as S from "./TimeChanger.styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Popup from "../Popup";

function formatTime(time: number) {
  return Math.round((time / 60000) * 10) / 10;
}

function calculateTime(time: number) {
  if (isNaN(time)) return 0;
  return time * 60000;
}

interface TimeChangerProps {
  value: number;
  onAccept: (value: number) => void;
  onCancel: () => void;
}

const TimeChanger = ({ value, onAccept, onCancel }: TimeChangerProps) => {
  const [time, setTime] = useState<number | string>(formatTime(value));
  const inputRef = useRef<HTMLInputElement>(null);

  function handleTimeOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value.replace(/[^0-9.,]/g, "");
    setTime(value);
  }

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  function handleAcceptOnClick() {
    onAccept(calculateTime(+time));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      onAccept(calculateTime(+time));
    }
  }

  return (
    <Popup onCancel={onCancel}>
      <S.Wrapper>
        <S.TimeWrapper>
          <S.Time
            value={time}
            onChange={handleTimeOnChange}
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <S.TypeSelect>m</S.TypeSelect>
        </S.TimeWrapper>
        <S.AcceptButton onClick={handleAcceptOnClick}>set</S.AcceptButton>
      </S.Wrapper>
    </Popup>
  );
};

export default TimeChanger;
