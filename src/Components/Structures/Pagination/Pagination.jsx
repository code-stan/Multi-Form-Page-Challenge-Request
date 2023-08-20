import { useAppContext } from "../../App"

const Pagination = () => {
  const {index} = useAppContext()
  
  return (
    <div className="pagination-section">
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: index === 1 ? "green": "transparent"}}>1</div>
            <div className="pagination__name">
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
        </div>
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: index === 2 ? "green": "transparent"}}>2</div>
            <div className="pagination__name">
                <p>STEP 2</p>
                <p>SELECT PLAN</p>
            </div>
        </div>
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: index === 3 ? "green": "transparent"}}>3</div>
            <div className="pagination__name">
                <p>STEP 3</p>
                <p>ADD-ONS</p>
            </div>
        </div>
        <div className="pagination__step">
            <div className="pagination__no" style={{backgroundColor: index === 4 ? "green": "transparent"}}>4</div>
            <div className="pagination__name">
                <p>STEP 4</p>
                <p>SUMMARY</p>
            </div>
        </div>
    </div>
  )
}

export default Pagination