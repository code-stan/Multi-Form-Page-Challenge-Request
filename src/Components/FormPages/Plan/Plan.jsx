/* eslint-disable react/prop-types */
import { useToggleState } from "../../Form"
const Plan = ({planName, monthAtm, yearAtm}) => {
  const {isMonth} = useToggleState()
    return (
    <div className="plan__name">
        <div className="plan__img">
            <img src={`./Assets/${planName}`} alt={planName} />
        </div>
        <div className="plan__name">
            {planName}
        </div>
        <div className="plan__amount">
            ${isMonth? `${monthAtm}/mo`: `${yearAtm()}/yr`}
            {!isMonth && "2 months free"}
        </div>
    </div>
  )
}

export default Plan