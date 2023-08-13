/* eslint-disable react/prop-types */
const FirstPageForm = ({selectorName, type, placeholder}) => {
  return (
    <div className={selectorName}>
        <label htmlFor={`${selectorName}-input`}className={`${selectorName}-label`}></label>
        <input type={type} className={`${selectorName}-input`} id={`${selectorName}-input`} placeholder={`e.g. ${placeholder}`}/>
    </div>
  )
}

export default FirstPageForm