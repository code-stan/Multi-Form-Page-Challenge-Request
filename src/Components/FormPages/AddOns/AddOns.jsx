/* eslint-disable react/prop-types */
import { useState } from "react"
import { useToggleState } from "../../Structures/Form/Form"
const AddOns = ({name, addOn, subHead, monthAtm}) => {
  const {isMonth, setSelectAddOn} = useToggleState()
  const [isChecked, setIsChecked] = useState(false)
  const yearAtm = () => monthAtm * 10

  function pushAddOns(e){
    const {name, value, id} = e.target;
    setIsChecked(!isChecked)
    setSelectAddOn(prevAddOn =>{
      return{
        ...prevAddOn, [name]:  {name: isChecked ? "" : id, price: isChecked ? 0 : value, displayPrice: isChecked ? "" : `+$${value}/${isMonth? "mo" : "yr"}`
      }
     }
    })
  
  }

  return (
    <label htmlFor={addOn} >
          <input type="checkbox" 
          name={name} 
          onChange={pushAddOns} 
          id={addOn} 
          value={isMonth? monthAtm : yearAtm()} 
          aria-label={addOn}/>
          <div className="addon-item">
            <div className="addon-content">
                <div className="addon-name">{addOn}</div>
                <div className="addon-subhead">{subHead}</div>
            </div>
            <div className="addon-price">
                {`+$${isMonth? `${monthAtm}/mo` : `${yearAtm()}/yr`}`}
            </div>
          </div>
    </label>
  ) 
}

export default AddOns