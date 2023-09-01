import { ButtonGenericPropTypes } from '../../utils/propTypes'
import './ButtonGeneric.css'

function ButtonGeneric({ buttonContent, isDisabled, onClick }) {
  return (
    <button
      className={`main__button ${isDisabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonContent}
    </button>
  )
}

ButtonGeneric.propTypes = ButtonGenericPropTypes

export default ButtonGeneric
