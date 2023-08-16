/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useRef  } from "react"

import { labelInputData } from "./FormPages/FirstPageForm/labelInputData";
import FirstPageForm from "./FormPages/FirstPageForm/FirstPageForm";
import { addOn } from "./FormPages/AddOns/addOn";
import AddOnsComp from "./FormPages/AddOns/AddOns.jsx";
import { planData } from "./FormPages/Plan/planData";
import Plan from "./FormPages/Plan/Plan";
const toggleStateControl = createContext()

export const useToggleState = ()=> useContext(toggleStateControl)
const Form = ()=>{

  const [isMonth, setIsMonth] = useState(true)
  const [plan, setPlan] = useState({planName: ""})
  const [selectAddOn, setSelectAddOn] = useState({})
  const addOnPrice = useRef(null)

  console.log(selectAddOn)

  function displayAddOns(){
    for(let el in selectAddOn.name){
      el
    }
  }
  displayAddOns()
  function togglePlan(){
      setIsMonth(!isMonth)
  }

  return (
    <toggleStateControl.Provider value={{isMonth, setPlan, setSelectAddOn, addOnPrice}}>
      <main>
          <header className="header">
            <div className="header__name"></div>
            <div className="header__desc"></div>
          </header>
        <form className="form">
          <div className="first-page">
            {
              labelInputData.map((data, i) =>{
                return <FirstPageForm key={i} {...data}/>
                
              })
            }
          </div>
          <div className="second-page">
            {
              planData.map((data, i) => {
                return <Plan key={i} {...data}/>
              })
            }
            <div className="plan-switch">
              <label htmlFor="toggler" className="toggler">
                <span className="monthly">Monthly</span>
                <div className="toggler-bar">
                  <input type="checkbox" className="checkbox" id="toggler" onChange={togglePlan}/>
                  <div className="toggler-thumb"></div>
                </div>
                <span className="yearly">Yearly</span>
              </label>
            </div>

          </div>
          <div className="third-page">
            {
              addOn.map((data, i) => {
                return <AddOnsComp key={i} {...data}/>
              })
            }
          </div>
          <div className="last-page total-page">
            <div className="plan__selected">
              <div className="result-name">
                <p className="selected">
                  {plan.planName.price}  <span>{isMonth? "(Monthly)" : "(Yearly)"}</span>
                </p>
                <button type="">change</button>
              </div>
              <div className="result-price"></div>
            </div>
            <div className="addOn__selected">
                {
                  
                }
            </div>
          </div>
        </form>
      </main>

    </toggleStateControl.Provider>
  )
}

export default Form