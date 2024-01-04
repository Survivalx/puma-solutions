import { React, createContext, useEffect, useState } from 'react'
import dataJSON from "./Data.json"
export const Ctx = createContext();




const Context = ({ children }) => {

    const [data, setData] = useState(dataJSON);



    return <Ctx.Provider value={{ data: data }}>
        {children}
    </Ctx.Provider>;
}

export default Context