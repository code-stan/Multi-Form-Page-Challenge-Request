/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from "react"
import Form from "./Structures/Form/Form";
import headerData from "./Structures/Header/headerData";
import Header from "./Structures/Header/Header"
import Button from "./Structures/Button/Button";
import Pagination from "./Structures/Pagination/Pagination";

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const App = ()=>{
    const [index, setIndex] = useState(1)
    const [planNotToggled, setPlanNotToggled] = useState(true)


    return(
        <AppContext.Provider value={{index, setIndex, planNotToggled, setPlanNotToggled}}>
            <section className="app-container">
                <Pagination/>
                <div className="form-container">
                    <div className="form-container__header">
                        {headerData.map((data, i)=>{
                            return(
                                <Header key={i} {...data}/>
                            )
                        })
                        }
                    </div>
                    <div className="form-container__form">
                        <Form/>
                    </div>
                </div>
                <Button/>
            </section>
        </AppContext.Provider>
    )
}

export default App