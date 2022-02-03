import { useEffect, useState } from "react"
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { getCurrentMonth, getListByMonth } from "./helpers/dateFilter"
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { categories } from "./data/categories";
import { InputArea } from "./components/InputArea";
import { v4 as uuid } from "uuid";

import logoImg from "./assets/images/logo.png";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrenteMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(getListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    for (let i in filteredlist) {
      if (categories[filteredlist[i].category].expense) {
        totalExpense += filteredlist[i].value;
      } else {
        totalIncome += filteredlist[i].value;
      }      
    }

    setIncome(totalIncome);
    setExpense(totalExpense);
    
  }, [filteredlist]);

  const handleMonthCange = (newMonth: string) => {
    setCurrenteMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];

    item.id = uuid();
    newList.push(item);
    
    setList(newList);
  }
  
  const handleDeleteItem = (item: Item) => {
    let updatedList = list.filter(listItem => listItem.id !== item.id); 

    setList(updatedList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.Logo src={logoImg} alt="Logo"></C.Logo>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthCange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>
        
        <TableArea 
          items={filteredlist}
          onDeleteItem={handleDeleteItem}
        />
      </C.Body>
    </C.Container>
  );
}

export default App;