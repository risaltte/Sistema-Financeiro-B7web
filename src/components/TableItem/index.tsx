import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import { formatMoneyBr } from "../../helpers/formatNumbers"

import trashImg from "../../assets/images/trash.png";
import { useItems } from "../../hooks/useItems";

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    const { deleteItem } = useItems();

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}               
                </C.Category>
            </C.TableColumn>                
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    {formatMoneyBr(item.value)}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.ButtunAction
                    type="button"
                    onClick={() => deleteItem(item)}
                >
                    <img src={trashImg} alt="Deletar" />
                </C.ButtunAction>
            </C.TableColumn>
        </C.TableLine>
    );
};