/* eslint-disable react/prop-types */
import { useState } from "react"
import { useToggleState } from "../../Form"
const AddOns = ({name, addOn, subHead, monthAtm}) => {
  const {isMonth, addOnPrice, setSelectAddOn} = useToggleState()
  const yearAtm = () => monthAtm * 10
  const [isChecked, setIsChecked] = useState(false)

  function pushAddOns(e){
    const {name, value, ariaLabel} = e.target;
    setIsChecked(!isChecked)
    setSelectAddOn(prevAddOn =>{
      return{
        ...prevAddOn, [name]:  {name: isChecked ? "" : ariaLabel, price: isChecked ? "" : value
      }
    }
    })
  
  }

  return (
    <div className="addOn-item">
        <label htmlFor={`${addOn}-addon`}>

            <input type="checkbox" 
            name={name} 
            onChange={pushAddOns} 
            id={`${addOn}-addon`} 
            value={isMonth? monthAtm : yearAtm()} 
            aria-label={addOn}/>

            <div className="addon-content">
                <div className="addon__name">{addOn}</div>
                <div className="addon__subhead">{subHead}</div>
            </div>
            <div className="addon__price"  ref={addOnPrice}>
                {`+$${isMonth? `${monthAtm}/mo` : `${yearAtm()}/yr`}`}
            </div>
        </label>
    </div>
  ) 
}

export default AddOns