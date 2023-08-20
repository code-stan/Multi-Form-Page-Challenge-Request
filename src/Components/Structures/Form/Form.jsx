/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from "react"

import { labelInputData } from "../../FormPages/FirstPageForm/labelInputData";
import FirstPageForm from "../../FormPages/FirstPageForm/FirstPageForm";
import { addOn } from "../../FormPages/AddOns/addOn";
import AddOnsComp from "../../FormPages/AddOns/AddOns.jsx";
import { planData } from "../../FormPages/Plan/planData";
import Plan from "../../FormPages/Plan/Plan";
import { useAppContext } from "../../App";

const toggleStateControl = createContext()
export const useToggleState = ()=> useContext(toggleStateControl)

const Form = ()=>{
  // STATES
  const [isMonth, setIsMonth] = useState(true)
  const [plan, setPlan] = useState({planName: ""})
  const [selectAddOn, setSelectAddOn] = useState({})
  const [inputChecked, setInputChecked] = useState(false);

  // CONTEXT
  const {index, setIndex} = useAppContext();
  
  // FUNCTIONS
  
  function togglePlan(){
      setIsMonth(!isMonth)
      setPlan(prevPlan => {
        return{...prevPlan, planName: ""}
      })
      setSelectAddOn({})
  }

  function durationType(){
    return <span>{isMonth? "mo" : "yr"}</span>
  }
  
  function calculateTotalPricing(){
    let total = 0;
    Object.keys(plan).map((prop)=>{
      let planPrice = plan[prop].price;
      
      total += parseInt(planPrice)
    })
    Object.keys(selectAddOn).map((prop)=>{
      let addOnPrice = selectAddOn[prop].price;
      total += parseInt(addOnPrice)
    })
    return total
  }
  return (
    <toggleStateControl.Provider value={{isMonth, setPlan, setSelectAddOn, inputChecked, setInputChecked, index}}>
      <main>
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
          <div className="third-page" >
            {
              addOn.map((data, i) => {
                return <AddOnsComp key={i} {...data}/>
              })
            }
          </div>
          <div className="last-page total-page" >

             {/* Displays Plan Selected */}
            {
              Object.keys(plan).map((prop)=>{
                let planContent = plan[prop]
                return(
                  <div className="plan__selected" key={prop}>
                    <div className="result-name">
                      <p className="selected">
                        {planContent.name}<span>{isMonth? "(Monthly)" : "(Yearly)"}</span>
                      </p>
                      <button type="button" onClick={()=> {setIndex(2); console.log(index) }}>change</button>
                    </div>
                    <div className="result-price">${planContent.price}/{durationType()}</div>
                  </div>
                )
              })
            }

             {/* Displays AddOns Selected */}
            <div className="addOn__selected">
                {Object.keys(selectAddOn).map((prop) => {
                  let addon = selectAddOn[prop];
                  return (
                    <div className="selected-addon" key={prop}>
                      <p className="selected-addon__name">{addon.name}</p>
                      <p className="selected-addon__price">{addon.displayPrice}</p>
                    </div>
                  );
                })}
             </div>

              {/*Displays Total Pricing*/}
             <div className="total">
                <div className="total__name">Total (per {isMonth? "month": "year"})</div>
                <div className="total__pricing">
                  ${calculateTotalPricing()}/{durationType()}
                </div>
             </div>
          </div>
          
        </form>
      </main>

    </toggleStateControl.Provider>
  )
}

export default Form
{/* <div className="first-page" style={{display: index === 1? "block": "none"}}>
            {
              labelInputData.map((data, i) =>{
                return <FirstPageForm key={i} {...data}/>
                
              })
            }
          </div>
          <div className="second-page" style={{display: index === 2? "block": "none"}}>
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
          <div className="third-page" style={{display: index === 3? "block": "none"}}>
            {
              addOn.map((data, i) => {
                return <AddOnsComp key={i} {...data}/>
              })
            }
          </div>
          <div className="last-page total-page" style={{display: index === 4? "block": "none"}}>
            <div className="plan__selected">
              <div className="result-name">
                <p className="selected">
                  {plan.planName.price}  <span>{isMonth? "(Monthly)" : "(Yearly)"}</span>
                </p>
                <button type="" onClick={()=> setIndex(2)}>change</button>
              </div>
              <div className="result-price"></div>
            </div>
            <div className="addOn__selected">
                {Object.keys(selectAddOn).map((prop) => {
                  let addon = selectAddOn[prop];
                  return (
                    <div className="selected-addon" key={prop}>
                      <p className="selected-addon__name">{addon.name}</p>
                      <p className="selected-addon__price">{addon.price}</p>
                    </div>
                  );
                })}
             </div>
          </div> */}