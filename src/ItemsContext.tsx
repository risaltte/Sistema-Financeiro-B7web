import { createContext, ReactNode, useEffect, useState } from "react";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { getCurrentMonth, getListByMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";
import { v4 as uuid } from "uuid";

type ItemInput = Omit<Item, 'id'>;

interface ItemProviderProps {
    children: ReactNode
}

interface ItemsContextData {
    list: Item[];
    filteredList: Item[];
    currentMonth: string;
    income: number;
    expense: number;
    createItem: (item: ItemInput) => void;
    deleteItem: (item: Item) => void;
    monthChange: (newMonth: string) => void;
}

export const ItemsContext = createContext<ItemsContextData>(
    {} as ItemsContextData
);

export function ItemsProvider({ children }: ItemProviderProps) {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrenteMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilteredList(getListByMonth(list, currentMonth));
    }, [list, currentMonth]);

    useEffect(() => {
        let totalIncome = 0;
        let totalExpense = 0;

        for (let i in filteredList) {
            if (categories[filteredList[i].category].expense) {
                totalExpense += filteredList[i].value;
            } else {
                totalIncome += filteredList[i].value;
            }
        }

        setIncome(totalIncome);
        setExpense(totalExpense);

    }, [filteredList]);

    const monthChange = (newMonth: string) => {
        setCurrenteMonth(newMonth);
    };

    const createItem = (item: ItemInput) => {
        const { title, category, date, value } = item;

        const newItem: Item = {
            id: uuid(),
            date, 
            category,
            title,
            value
        };

        let newList = [...list];
        newList.push(newItem);

        setList(newList);
    }

    const deleteItem = (item: Item) => {
        let updatedList = list.filter(listItem => listItem.id !== item.id);

        setList(updatedList);
    }

    return(
        <ItemsContext.Provider value={{list, filteredList, createItem, deleteItem, currentMonth, monthChange, income, expense}}>
            { children }
        </ItemsContext.Provider>
    );
}
