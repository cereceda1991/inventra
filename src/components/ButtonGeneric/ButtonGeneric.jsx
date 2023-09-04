import { ButtonGenericPropTypes } from '../../utils/propTypes'
import './ButtonGeneric.css'

function ButtonGeneric({ buttonContent, isDisabled }) {
  return (
    <button
      className={`main__button ${isDisabled ? 'disabled' : ''}`}
      disabled={isDisabled}
    >
      {buttonContent}
    </button>
  )
}

ButtonGeneric.propTypes = ButtonGenericPropTypes

export default ButtonGeneric
