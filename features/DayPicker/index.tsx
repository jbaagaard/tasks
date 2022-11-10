import * as S from "./DayPicker.styled"

interface DayPickerProps{
    value:Date
    onChange:(date:Date)=>void
}
const DayPicker = ({value,onChange}:DayPickerProps) => {

    function HandlePrewOnClick() {
        onChange(new Date(new Date(value.getTime()).setDate(value.getDate()-1)))
    }

    function handleNextOnClick() {
        onChange(new Date(new Date(value.getTime()).setDate(value.getDate()+1)))

    }

    return (
        <S.Wrapper>
            <S.Button onClick={HandlePrewOnClick}>{"< Prew"}</S.Button>
            <S.Text>{value.getFullYear()+"-"+value.getMonth()+"/"+value.getDate()}</S.Text>
            <S.Button onClick={handleNextOnClick}>{"Next >"}</S.Button>
        </S.Wrapper>
    )
}

export default DayPicker