'use client';
import React, { createContext, useState } from 'react';
import { getFromStorage, saveToStorage } from '@/app/_services/localStorService';
import uuid4 from 'uuid4';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    const [userAnonimusID, setUserAnonimusID] = useState(
        getFromStorage('userAnonimusID')
            ? getFromStorage('userAnonimusID')
            : uuid4(),
    );
    if (!getFromStorage('userAnonimusID')) {
        saveToStorage('userAnonimusID', userAnonimusID);
    }
    const [contextBasket, setContextBasket] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(
        getFromStorage('chosenCurrency')
            ? getFromStorage('chosenCurrency')
            : 'ua',
    );
        if (!getFromStorage('chosenCurrency')) {
            saveToStorage('chosenCurrency', selectedCurrency);
        }
    const [selectedLanguage, setSelectedLanguage] = useState(
        getFromStorage('chosenLanguage')
            ? getFromStorage('chosenLanguage')
            : 'ua',
    );
            if (!getFromStorage('chosenLanguage')) {
                saveToStorage('chosenLanguage', selectedLanguage);
            }

    return (
        <StatusContext.Provider
            value={{
                userAnonimusID,
                setUserAnonimusID,
                contextBasket,
                setContextBasket,
                selectedCurrency,
                setSelectedCurrency,
                selectedLanguage,
                setSelectedLanguage,
            }}
        >
            {children}
        </StatusContext.Provider>
    );
};
