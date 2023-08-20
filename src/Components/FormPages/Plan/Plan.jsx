/* eslint-disable react/prop-types */
import { useAppContext } from "../../App"
import { useToggleState } from "../../Structures/Form/Form"
const Plan = ({planName, monthAtm}) => {
  const yearAtm = () => monthAtm * 10
  const {isMonth, setPlan} = useToggleState()
  const {setPlanNotToggled} = useAppContext()
  
  function getPlanFunc(e){
    const {name, value, ariaLabel} = e.target
    setPlan(prevPlanName => {
      return{ ...prevPlanName, [name]: {name: ariaLabel, price: value}}
    })
    setPlanNotToggled(false)
  }
  
  return (
    <label className="plan__name" htmlFor={`${planName}-selected`} >
        <div className="plan__img">
            <img src={`./assets/images/icon-${planName.toLowerCase()}.svg`} alt={planName} />
        </div>
        <input type="radio" name="planName" id={`${planName}-selected`} onChange={getPlanFunc} value={isMonth? monthAtm : yearAtm()} aria-label={planName}/>
        <div className="plan__name">
            {planName}
        </div>
        <div className="plan__amount">
            ${isMonth? `${monthAtm}/mo`: `${yearAtm()}/yr`}
            {!isMonth && "2 months free"}
        </div>
    </label>
  )
}

export default Plan