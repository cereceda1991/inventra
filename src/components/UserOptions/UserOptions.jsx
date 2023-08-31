import { UserOptionsPropTypes } from '../../utils/propTypes'
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'
import './UserOptions.css'

const UserOptions = ({ userCount, options }) => {
  return (
    <div className='user-options'>
      <div className='user-options__counter'>{userCount}</div>
      <div className='user-options__actions'>
        <div className='user-options__dropdown'>
          <select>
            <option value=''>Ordenar por</option>
            {options.sortBy.map((option, index) => (
              <option key={index} value={`opcion${index + 1}`}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {options.actions.map((action, index) => (
          <div className='user__options' key={index}>
            {action.icon}
            <p>{action.label}</p>
          </div>
        ))}

        {options.buttons.map((button, index) => (
          <div className='user__options' key={index}>
            <ButtonGeneric buttonContent={button.label} onClick={button.onClick} />
          </div>
        ))}
      </div>
    </div>
  )
}

UserOptions.propTypes = UserOptionsPropTypes

export default UserOptions
