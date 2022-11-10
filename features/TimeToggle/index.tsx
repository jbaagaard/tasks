import * as S from "./TimeToggle.styled"

function formatTime(time:number){
    let seconds = time / 1000
    if(seconds<60)
        return Math.floor(seconds)+"s"
    else
        if(seconds<3600)
            return Math.floor(seconds/60)+"m"
    else
        return Math.round(seconds/360)/10+"h"

}

interface TimeToggleProps {
    time: number
    value: boolean
    onChange: (value: boolean) => void
}

const TimeToggle = ({onChange, time, value}: TimeToggleProps) => {

    function handleOnClick() {
        onChange(!value)
    }

    return (
        <S.Wrapper>
            <S.Content value={value}>
                <S.timeText value={value}>
                    {formatTime(time)}
                </S.timeText>
                <S.Button onClick={handleOnClick} value={value}>
                    {value ? "Pause" : "Start"}
                </S.Button>
                <S.timeText value={value}>
                    {formatTime(time)}

                </S.timeText>
            </S.Content>
        </S.Wrapper>
    )
}

export default TimeToggle