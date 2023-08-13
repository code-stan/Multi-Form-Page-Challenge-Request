/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from "react"

import { labelInputData } from "./FormPages/FirstPageForm/labelInputData";
import FirstPageForm from "./FormPages/FirstPageForm/FirstPageForm";
import AddOns from "./AddOns/AddOns";
import AddOnsComp from "./AddOns/AddOns.jsx";
const toggleStateControl = createContext()

export const useToggleState = ()=> useContext(toggleStateControl)
const Form = ()=>{

  const [isMonth, setIsMonth] = useState(true)
  function togglePlan(){
      setIsMonth(!isMonth)
  }

  return (
    <toggleStateControl.Provider value={{isMonth}}>
      <main>
          <header className="header">
            <div className="header__name"></div>
            <div className="header__desc"></div>
          </header>
        <form className="form">
          <div className="first-page">
            {
              labelInputData.map((data, i) =>{
                return(
                  <FirstPageForm key={i} {...data}/>
                )
              })
            }
          </div>
          <div className="second-page">
            
            <div className="plan-switch">
              <label htmlFor="toggler" className="toggler">
                <span className="monthly">Monthly</span>
                <div className="toggler-bar">
                  <input type="checkbox" className="checkbox"
                  name="toggler"onChange={togglePlan}/>
                  <div className="toggler-thumb"></div>
                </div>
                <span className="yearly">Yearly</span>
              </label>
            </div>

          </div>
          <div className="third-page">
            {
              AddOns.map(item => {
                <AddOnsComp {...item}/>
              })
            }
          </div>
          <div className="last-page total-page">
            {}
          </div>
        </form>
      </main>

    </toggleStateControl.Provider>
  )
}

export default Form