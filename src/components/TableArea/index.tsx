import { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import { TableItem } from "../TableItem";
import * as C from "./styles";

export const TableArea = () => {
    const { filteredList } = useContext(ItemsContext);

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
                {filteredList.map((item, index) => (
                    <TableItem 
                        key={index} 
                        item={item}
                    />
                ))}
            </tbody>
        </C.Table>
    );
};

