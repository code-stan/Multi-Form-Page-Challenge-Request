/* eslint-disable react/prop-types */
import { useToggleState } from "../Form"
const AddOns = ({addOn, subHead,monthAtm, yearAtm}) => {
    const {isMonth} = useToggleState()
  return (
    <div className="addOn-item">
        <label htmlFor="select-addon">
            <input type="checkbox" name="select-addon" id="select-addon" value={addOn}/>
            <div className="addon-content">
                <div className="addon__name">{addOn}</div>
                <div className="addon__subhead">{subHead}</div>
            </div>
            <div className="addon__price">
                {`+$${isMonth? monthAtm`/mo` : yearAtm`/yr`}`}
            </div>
        </label>
    </div>
  )
}

export default AddOns