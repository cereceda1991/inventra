import PropTypes from 'prop-types'
import './CardDashboard.css'

const CardDashboard = ({ icon, title, value }) => {
  return (
    <div className='card'>
      <div className='card-dashboard-icon'>{icon}</div>
      <p className='card-value'>{value}</p>
      <h2 className='card-title'>{title}</h2>
    </div>
  )
}

CardDashboard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default CardDashboard
