import * as S from "./Footer.styled";
import { getFormattedTimeFromNotes } from "../noteUtils";
import { useContext, useState } from "react";
import { NoteBlockContext } from "../NoteBlockContext";
import { ThemeContext } from "../ThemeContext";
import Popup from "../Popup";
import ExportData from "../ExportData";
import ImportData from "../ImportData";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const { focusIndex, notes } = useContext(NoteBlockContext);
  const { themes, currentTheme, setTheme } = useContext(ThemeContext);
  const [showImportOverlay, setShowImportOverlay] = useState(false);
  const [showExportOverlay, setShowExportOverlay] = useState(false);

  function getOptions() {
    const options = [];

    for (const prop in themes)
      options.push(
        <S.Option value={prop} key={prop}>
          {prop}
        </S.Option>
      );
    return options;
  }

  function handleOnSelect(e: any) {
    setTheme(e.target.value);
  }

  function handleImportCancel() {
    setShowImportOverlay(false);
  }

  function handleImportButtonOnClick() {
    setShowImportOverlay(true);
  }

  function handleExportCancel() {
    setShowExportOverlay(false);
  }

  function handleExportButtonOnClick() {
    setShowExportOverlay(true);
  }

  return (
    <>
      {showImportOverlay && (
        <Popup onCancel={handleImportCancel}>
          <ImportData />
        </Popup>
      )}
      {showExportOverlay && (
        <Popup onCancel={handleExportCancel}>
          <ExportData />
        </Popup>
      )}
      <S.Wrapper>
        <S.Text>
          {` ${focusIndex} | Total time: ${getFormattedTimeFromNotes(notes)}`}
        </S.Text>
        <S.RightWrapper>
          <S.Seperator>
            <S.ImportButton onClick={handleImportButtonOnClick}>
              import
            </S.ImportButton>
            <S.ExportButton onClick={handleExportButtonOnClick}>
              export
            </S.ExportButton>
          </S.Seperator>
          <S.Text>theme: </S.Text>
          <S.Select onChange={handleOnSelect} defaultValue={currentTheme}>
            {getOptions().map((o) => o)}
          </S.Select>
        </S.RightWrapper>
      </S.Wrapper>
    </>
  );
};

export default Footer;
