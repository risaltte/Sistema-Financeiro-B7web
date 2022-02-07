import { Category } from "../types/Category"

export const categories: Category = {
    food: {title: 'Alimentação', color: '#1C05FC', expense: true},
    rent: {title: 'Aluguel', color: '#FF5147', expense: true},
    car: {title: 'Carro', color: '#F58C31', expense: true},    
    house: {title: 'Casa', color: '#FC056D', expense: true},
    Leisure: {title: 'Lazer', color: '#8A6D00', expense: true},        
    extraIncome: {title: 'Extra', color: '#038F0D', expense: true},        
    clothes: {title: 'Roupas', color: '#332011', expense: true}, 
    salary: {title: 'Salário', color: '#4CF507', expense: false},
    supermarket: {title: 'Supermercado', color: '#F5D232', expense: true},    
    others: {title: 'Outros', color: '#CB11E6', expense: true},    
};