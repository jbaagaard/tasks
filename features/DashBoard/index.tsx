import * as S from "./Dashboard.styled";
import { useEffect, useState } from "react";
import DayPicker from "../DayPicker";
import NoteBlockRenderer from "../NoteBlockRenderer";
import { BlockType } from "../types";
import TopMenu from "../TopMenu";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  const [date, setDate] = useState(new Date());
  const [initialized, setInitialized] = useState(false);
  const [rendererTarget, setRendererTarget] = useState<BlockType>("daily");

  useEffect(() => {
    setInitialized(true);
  }, []);

  function handleDatePickerOnChange(date: Date) {
    setDate(date);
  }

  function handleTopMenuOnChange(value: BlockType) {
    setRendererTarget(value);
  }

  return initialized ? (
    <S.Wrapper>
      <TopMenu value={rendererTarget} onChange={handleTopMenuOnChange} />
      {rendererTarget === "daily" && (
        <S.Header>
          <S.HeaderContent>
            <DayPicker value={date} onChange={handleDatePickerOnChange} />
          </S.HeaderContent>
        </S.Header>
      )}
      <NoteBlockRenderer day={date} type={rendererTarget} />
    </S.Wrapper>
  ) : null;
};

export default Dashboard;
