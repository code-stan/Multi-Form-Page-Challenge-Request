import { useEffect, useState } from "react"
import { useAppContext } from "../../App"


const Button = () => {
  const {index, setIndex, planNotToggled} = useAppContext()
  const [nextStep, setNextStep] = useState("Next Step")

  useEffect(()=>{
     if(index > 1 || index < 4){
      setNextStep("Next Step")
    }
    if(index === 4){
      setNextStep("Confirm");
    }
  }, [index])
  function prevPage(){
    setIndex(prevIndex => prevIndex - 1)
  }
  function nextPage(){
    setIndex(prevIndex => prevIndex + 1)
    if(index >= 4){
      setIndex(4)
    }
  }

  return (
    <div className="changeBtnSection">
      <div className="change__btn">
        <button className="change__btn--right" style={{opacity: index <= 1 ? 0 : 1, pointerEvents: index <= 1 ? "none" : "auto"}} onClick={prevPage}>Go Back</button>
      </div>
      <div className="change__btn">
        <button type="submit" className="change__btn--left" onClick={nextPage} disabled={index === 2 && planNotToggled } style={{backgroundColor: index === 4? "hsl(243, 100%, 62%)" : "hsl(213, 96%, 18%)"}}>{nextStep}</button>
      </div>
    </div>
  )
}

export default Button