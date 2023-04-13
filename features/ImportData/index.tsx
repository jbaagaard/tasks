import * as S from "./ImportData.styled";
import { useState } from "react";
import { importData } from "../api";

interface ImportDataProps {}
const ImportData = ({}: ImportDataProps) => {
  const [data, setData] = useState("");
  async function handleImportData() {
    await importData(data);
  }

  function handleInputOnChange(e: any) {
    setData(e.currentTarget.value);
  }

  return (
    <S.Wrapper>
      <S.Button onClick={handleImportData}>Import Data</S.Button>
      <S.Input value={data} onChange={handleInputOnChange} />
    </S.Wrapper>
  );
};

export default ImportData;
