import * as S from "./Dashboard.styled"
import {useState} from "react";
import DayPicker from "../DayPicker";
import Day from "../Day";

interface DashboardProps{

}
const Dashboard = ({}:DashboardProps) => {
    const [date, setDate] = useState(new Date())

    function handleDatePickerOnChange(date:Date) {
        setDate(date)
    }

    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderContent>
                    <DayPicker value={date} onChange={handleDatePickerOnChange}/>

                </S.HeaderContent>
            </S.Header>
            <Day day={date}/>
        </S.Wrapper>
    )
}

export default Dashboard