// AppState.tsx
import React, { useState, useEffect, ReactNode } from 'react';

interface AppStateProps {
    children: ReactNode;
}

interface AppStateContext {
    itemCount: number;
    setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AppStateContext = React.createContext<AppStateContext | undefined>(undefined);

export const AppStateProvider: React.FC<AppStateProps> = ({ children }) => {
    const [itemCount, setItemCount] = useState<number>(0);

    // Save and retrieve itemCount from localStorage to persist across page refreshes
    useEffect(() => {
        const storedItemCount = localStorage.getItem('itemCount');
        if (storedItemCount) {
            setItemCount(Number(storedItemCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('itemCount', itemCount.toString());
    }, [itemCount]);

    const contextValue: AppStateContext = {
        itemCount,
        setItemCount,
    };

    return <AppStateContext.Provider value={contextValue}>{children}</AppStateContext.Provider>;
};
