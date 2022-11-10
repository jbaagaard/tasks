import * as S from "./Dashboard.styled"
import {useEffect, useState} from "react";
import DayPicker from "../DayPicker";
import Day from "../Day";

interface DashboardProps {

}

const Dashboard = ({}: DashboardProps) => {
    const [date, setDate] = useState(new Date())
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        console.log("dashboard")
        setInitialized(true)
    }, [])

    function handleDatePickerOnChange(date: Date) {
        setDate(date)
    }

    return (
        initialized ?
            <S.Wrapper>
                <S.Header>
                    <S.HeaderContent>
                        <DayPicker value={date} onChange={handleDatePickerOnChange}/>

                    </S.HeaderContent>
                </S.Header>
                <Day day={date}/>
            </S.Wrapper> : null

    )
}

export default Dashboard