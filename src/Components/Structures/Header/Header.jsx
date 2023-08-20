/* eslint-disable react/prop-types */
import { useAppContext } from "../../App"
const Header = ({heading, subheading, no}) => {
  const {index} = useAppContext()
  return (
    <header className="title-box" style={{display: index === no? "block": "none"}}>
        <div className="title-box__heading">{heading}</div>
        <div className="title-box__sub-heading">{subheading}</div>
    </header>
  )
}

export default Header