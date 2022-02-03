import { Item } from "../types/Item"

export const getCurrentMonth = (): string => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const getListByMonth = (list: Item[], data: string): Item[] => {
    let newList: Item[] = [];

    const [year, month] = data.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() +1 === parseInt(month) 
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
};

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    const [year, month] = currentMonth.split('-');

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) -1]} de ${year}`;
};

export const getDateFromString = (stringDate: string): Date => {
    let [year, month, day] = stringDate.split('-');

    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};