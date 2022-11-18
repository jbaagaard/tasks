import * as S from "./TimeToggle.styled";
import { useState } from "react";
import TimeChanger from "../TimeChanger";

function formatTime(time: number) {
  let seconds = time / 1000;
  if (seconds < 60) return Math.floor(seconds) + "s";
  else if (seconds < 3600) return Math.floor(seconds / 60) + "m";
  else return Math.round(seconds / 360) / 10 + "h";
}

interface TimeToggleProps {
  time: number;
  value: boolean;
  onChange: (value: boolean) => void;
  onTimeChange: (time: number) => void;
}

const TimeToggle = ({
  onChange,
  time,
  value,
  onTimeChange,
}: TimeToggleProps) => {
  const [editing, setEdiding] = useState(false);

  function handleOnClick() {
    onChange(!value);
  }

  function handleTimeChangerOnAccept(time: number) {
    onTimeChange(time);
    setEdiding(false);
  }

  function handleTimeChangerOnCancel() {
    setEdiding(false);
  }

  function handleTimeTextOnClick() {
    setEdiding(true);
  }

  return (
    <S.Wrapper>
      <S.Content value={value}>
        <S.timeText value={value}>{formatTime(time)}</S.timeText>
        <S.Button onClick={handleOnClick} value={value}>
          {value ? "Pause" : "Start"}
        </S.Button>
        <S.timeText value={value} onClick={handleTimeTextOnClick}>
          {editing ? (
            <TimeChanger
              value={time}
              onAccept={handleTimeChangerOnAccept}
              onCancel={handleTimeChangerOnCancel}
            />
          ) : (
            formatTime(time)
          )}
        </S.timeText>
      </S.Content>
    </S.Wrapper>
  );
};

export default TimeToggle;
