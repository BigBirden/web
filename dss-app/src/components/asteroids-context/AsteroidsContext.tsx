import {createContext, FC, ReactNode, useState} from "react";
import {RouterProvider} from "react-router-dom";

export const AsteroidsContext = createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children}) =>{
    //Для вывода только опасных астероидов
    let [onlyDangerous, setOnlyDangerous] = useState(false)
    //КМ - в километрах, для установки значений
    let [isKM, setKM] = useState(false)


    return <AsteroidsContext.Provider value={{onlyDangerous, setOnlyDangerous, isKM, setKM}}>
        {children}
    </AsteroidsContext.Provider>
}
