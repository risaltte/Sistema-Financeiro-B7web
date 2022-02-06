import * as C from "./styles";
import { categories } from "../../data/categories";
import { FormEvent, useState } from "react";
import { getDateFromString } from "../../helpers/dateFilter"
import { useItems } from "../../hooks/useItems";

export const InputArea = () => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const { createItem } = useItems();

    const handleAddItem = (event: FormEvent) => {
        event.preventDefault();

        if (!validatedForm()) {
            return;
        }

        createItem({
            date: getDateFromString(date),
            category,
            title,
            value
        });

        clearForm();
    };

    const validatedForm = (): boolean => {
        if (date === '') {
            return false;
        }

        if (category === '') {
            return false;
        }

        if (title === '') {
            return false;
        }

        if (value <= 0) {
            return false;
        }

        return true;
    };

    const clearForm = (): void => {
        setDate('');
        setCategory('');
        setTitle('');
        setValue(0);
    }

    return (
        <C.Container>
            <form onSubmit={handleAddItem}>
                <C.FormGroup>
                    <label htmlFor="">Data</label>
                    <input 
                        type="date"
                        value={date}
                        onChange={event => setDate(event.target.value)}
                    />
                </C.FormGroup>

                <C.FormGroup>
                    <label htmlFor="">Categoria</label>
                    <select 
                        name="category"
                        value={category} 
                        onChange={event => setCategory(event.target.value)}
                    >
                        <option                             
                            disabled
                            value={''}                            
                        >
                            -- Selecione --
                        </option>

                        {Object.keys(categories).map((key, index) => (
                            <option key={key} value={key}>{categories[key].title}</option>
                        ))}
                    </select>
                </C.FormGroup>

                <C.FormGroup>
                    <label htmlFor="">Título</label>
                    <input 
                        type="text" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </C.FormGroup>

                <C.FormGroup>
                    <label htmlFor="">Valor</label>
                    <input 
                        type="number"
                        value={value}
                        onChange={event => setValue(Number(event.target.value))} 
                    />
                </C.FormGroup>

                <button 
                    type="submit"
                >
                    ➕ Adicionar
                </button>
            </form>
        </C.Container>
    );
};