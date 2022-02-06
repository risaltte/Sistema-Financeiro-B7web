import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter"; 
import { ResumeItem } from "../ResumeItem";
import { useItems } from "../../hooks/useItems";

export const InfoArea = () => {
    const {currentMonth, monthChange, income, expense} = useItems();

    const onHandlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const onHandleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={onHandlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={onHandleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense} 
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
};