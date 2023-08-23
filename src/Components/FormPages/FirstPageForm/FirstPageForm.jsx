/* eslint-disable react/prop-types */
const FirstPageForm = ({name, selectorName, type, placeholder}) => {
  return (
    <div className={`${selectorName} user-data`}>
        <label htmlFor={`${selectorName}-input`}className={`${selectorName}-label user-data__label`}>{name}</label>
        <input type={type} className={`${selectorName}-input user-data__input`} id={`${selectorName}-input`} placeholder={`e.g. ${placeholder}`} required/>
    </div>
  )
}

export default FirstPageForm