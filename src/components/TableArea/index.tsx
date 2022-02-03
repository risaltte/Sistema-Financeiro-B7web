import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import * as C from "./styles";

type Props = {
    items: Item[];
    onDeleteItem: (item: Item) => void;
};

export const TableArea = ({items, onDeleteItem}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColum width={100}>Data</C.TableHeadColum>
                    <C.TableHeadColum width={100}>Categoria</C.TableHeadColum>
                    <C.TableHeadColum>Título</C.TableHeadColum>
                    <C.TableHeadColum width={150}>Valor</C.TableHeadColum>
                    <C.TableHeadColum width={70}>Ações</C.TableHeadColum>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <TableItem 
                        key={index} 
                        item={item}
                        onDeleteItem={onDeleteItem}
                    />
                ))}
            </tbody>
        </C.Table>
    );
};

