import * as S from "./Footer.styled";
import { getFormattedTimeFromNotes } from "../noteUtils";
import { useContext } from "react";
import { NoteBlockContext } from "../NoteBlockContext";
import { ThemeContext } from "../ThemeContext";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const { focusIndex, notes } = useContext(NoteBlockContext);
  const { themes, currentTheme, setTheme } = useContext(ThemeContext);

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

  return (
    <S.Wrapper>
      <S.Text>
        {` ${focusIndex} | Total time: ${getFormattedTimeFromNotes(notes)}`}
      </S.Text>
      <S.Select onChange={handleOnSelect} defaultValue={currentTheme}>
        {getOptions().map((o) => o)}
      </S.Select>
    </S.Wrapper>
  );
};

export default Footer;
