import * as S from "./TopMenu.styled";
import { BlockType } from "../types";

interface TopMenuProps {
  value: BlockType;
  onChange: (value: BlockType) => void;
}

const TopMenu = ({ value, onChange }: TopMenuProps) => {
  function handleDailyOnClick() {
    onChange("daily");
  }

  function handleRecurringOnClick() {
    onChange("template");
  }

  function handleGlobalOnClick() {
    onChange("global");
  }

  return (
    <S.Wrapper>
      <S.Button onClick={handleDailyOnClick} active={value === "daily"}>
        daily notes
      </S.Button>
      <S.Button onClick={handleRecurringOnClick} active={value === "template"}>
        template
      </S.Button>
      <S.Button onClick={handleGlobalOnClick} active={value === "global"}>
        permanent notes
      </S.Button>
    </S.Wrapper>
  );
};

export default TopMenu;
