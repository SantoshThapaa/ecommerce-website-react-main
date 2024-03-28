import React,{createContext} from 'react';

export const GlobalContext = createContext()

const GlobalContextProvider = (props) =>{
    const std = {
        name: 'ram',
        age: 20,
        subject: 'Node JS'
    }
    return(
        <GlobalContext.Provider value={std}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider