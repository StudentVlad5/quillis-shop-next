'use client';
import React, { useContext } from 'react';
import { SelectContainerCurrency, SelectCurrency } from './currency.styled';
import { StatusContext } from '../ContextStatus/ContextStatus';
import { saveToStorage } from '@/app/_services/localStorService';
import {currency} from "@/app/_baseConst/Base-const"

const Currency = () => {
    const { selectedCurrency, setSelectedCurrency } = useContext(StatusContext);
console.log(selectedCurrency, setSelectedCurrency);
    const changeCurrency = (event) => {
        const currency = event.target.value;
        saveToStorage('chosenCurrency', currency);
        setSelectedCurrency(currency);
    };

    return (
        <SelectContainerCurrency>
            <SelectCurrency onChange={changeCurrency} value={selectedCurrency}>
                {currency.map((it) => (
                    <option value={it.value} key={it.value}>
                        {it.option}
                    </option>
                ))}
            </SelectCurrency>
        </SelectContainerCurrency>
    );
};

export default Currency;
