import { MyContext } from "./MyContext";
import { useState } from "react";


export function MyStateProvider({children}) {
    const [mode, setMode] = useState('light')
    
     const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#282c34'
        } else {
            setMode('light')
            document.body.style.backgroundColor = '#f1f1f1'
        }
    }

    return (
        <MyContext.Provider value={{mode, toggleMode}}>{children}</MyContext.Provider>
    );
}

