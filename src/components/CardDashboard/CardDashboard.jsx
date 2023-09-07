import './CardDashboard.css';
import { CardDashboardPropTypes } from '../../utils/propTypes';

const CardDashboard = ({ icon, title, value }) => {
  return (
    <div className="card">
      <div className="card-dashboard-icon">{icon}</div>
      <p className="card-value">{value}</p>
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

CardDashboard.propTypes = CardDashboardPropTypes;

export default CardDashboard;
