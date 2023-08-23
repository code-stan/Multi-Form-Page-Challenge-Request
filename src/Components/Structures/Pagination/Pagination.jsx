/* eslint-disable no-unused-vars */
import { useAppContext } from "../../App"

const Pagination = () => {
  const {index} = useAppContext()
  
  const makeBgActive = (no) => {
    let activeBgColor = "transparent";
    if(index !== no){
        return activeBgColor;
    }
    return activeBgColor = "hsl(206, 94%, 87%)";
  }
  const makeBorderActive = (no) => {
    let activeBorder = "1.5px solid hsl(0, 0%, 100%)";
    if(index !== no){
        return activeBorder;
    }
    return activeBorder = "1.5px solid transparent";
  }
  const makeColorActive = (no) => {
    let activeColor = "hsl(0, 0%, 100%)";
    if(index !== no){
        return activeColor;
    }
    return activeColor = "hsl(213, 96%, 18%)";
  }

  return (
    <aside className="pagination">
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: makeBgActive(1), border: makeBorderActive(1), color: makeColorActive(1)}}>1</div>
            <div className="pagination__name">
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
        </div>
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: makeBgActive(2), border: makeBorderActive(2), color: makeColorActive(2)}}>2</div>
            <div className="pagination__name">
                <p>STEP 2</p>
                <p>SELECT PLAN</p>
            </div>
        </div>
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: makeBgActive(3), border: makeBorderActive(3), color: makeColorActive(3)}}>3</div>
            <div className="pagination__name">
                <p>STEP 3</p>
                <p>ADD-ONS</p>
            </div>
        </div>
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: makeBgActive(4), border: makeBorderActive(4), color: makeColorActive(4)}}>4</div>
            <div className="pagination__name">
                <p>STEP 4</p>
                <p>SUMMARY</p>
            </div>
        </div>
    </aside>
  )
}

export default Pagination