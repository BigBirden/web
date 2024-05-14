import {createContext, FC, ReactNode, useState} from "react";

export const AsteroidsContext = createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode;
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children}) =>{
    //Для вывода только опасных астероидов
    const [onlyDangerous, setOnlyDangerous] = useState(false)
    //КМ - в километрах, для установки значений
    const [isKM, setKM] = useState(false)

    //Для добавления в список на уничтожение
    const [destroyment, setDestroyment] = useState([]);

    console.log(destroyment)

    //Сама функция добавления - также сортирует список по id
    const addAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id), asteroid])
    }

    //Удаление астероида
    const deleteAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id)])
    }

    return <AsteroidsContext.Provider value={{onlyDangerous, setOnlyDangerous, isKM, setKM, addAsteroid, destroyment}}>
        {children}
    </AsteroidsContext.Provider>
}
