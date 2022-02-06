import * as C from "./styles";
import { categories } from "../../data/categories";
import { FormEvent, useState } from "react";
import { getDateFromString } from "../../helpers/dateFilter"
import { useItems } from "../../hooks/useItems";
import { toast } from "react-toastify";

interface ValidateFormError {
    success: boolean;
    id: string;
    message: string;
}

export const InputArea = () => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const { createItem } = useItems();

    const handleAddItem = (event: FormEvent) => {
        event.preventDefault();

        const resultValidatedForm = validatedForm();

        if (!resultValidatedForm.success) {
            toast.error(resultValidatedForm.message, {
                toastId: resultValidatedForm.id
            });

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

    const validatedForm = (): ValidateFormError => {
        if (date === '') {
            return {
                success: false,
                id: 'invalid-date',
                message: '📅 Data inválida.'
            };
        }

        if (category === '') {
            return {
                success: false,
                id: 'invalid-category',
                message: '🏷️ Categoria inválida.'
            };
        }

        if (title === '') {
            return {
                success: false,
                id: 'invalid-title',
                message: '✏️ O título não pode ser vazio.'
            };
        }

        if (value <= 0) {
            return {
                success: false,
                id: 'invalid-value',
                message: '💰 O valor precisa ser maior que zero.'
            };
        }

        return {
            success: true,
            id: 'valid-form',
            message: 'Dados do formulário validados.'
        };
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