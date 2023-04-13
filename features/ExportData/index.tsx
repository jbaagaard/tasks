import * as S from "./ExportData.styled";
import { useState } from "react";
import { exportAllData } from "../api";

interface ExportDataProps {}
const ExportData = ({}: ExportDataProps) => {
  const [data, setData] = useState("");
  async function handleExportData() {
    setData(JSON.stringify(await exportAllData()));
  }

  return (
    <S.Wrapper>
      <S.Button onClick={handleExportData}>Export Data</S.Button>
      <S.Input value={data} />
    </S.Wrapper>
  );
};

export default ExportData;
