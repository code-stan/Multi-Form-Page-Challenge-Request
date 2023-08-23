/* eslint-disable react/prop-types */
import { useAppContext } from "../../App"
import { useToggleState } from "../../Structures/Form/Form"
const Plan = ({planName, monthAtm}) => {
  const yearAtm = () => monthAtm * 10
  const {isMonth, setPlan} = useToggleState()
  const {setPlanNotToggled} = useAppContext()
  
  function getPlanFunc(e){
    const {name, value, id} = e.target
    console.log(e)
    setPlan(prevPlanName => {
      return{ ...prevPlanName, [name]: {name: id, price: value}}
    })
    setPlanNotToggled(false)
  }
  
  return (
    <label className="plan__label" htmlFor={planName} >
        <input type="radio" name="planName" id={planName} onChange={getPlanFunc} value={isMonth? monthAtm : yearAtm()} aria-label={planName} />
        <div className="plan__content"> 
          <div className="plan__img">
              <img src={`./assets/images/icon-${planName.toLowerCase()}.svg`} alt={planName} />
          </div>
          <div className="plan__text-content">
            <div className="plan__name">
                {planName}
            </div>
            <div className="plan__amount">
              <p>
                ${isMonth? `${monthAtm}/mo`: `${yearAtm()}/yr`}
              </p>
              <p>
                {!isMonth && "2 months free"}
              </p>
            </div>
          </div>
        </div>
    </label>
  )
}

export default Plan