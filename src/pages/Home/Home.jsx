import './Home.css';
import portada from '../../assets/landing-StockFlow-1.webp';
import logo from '../../assets/logo-azul.webp';
import { Link, Navigate } from 'react-router-dom';
import ButtonGeneric from '../../components/ButtonGeneric/ButtonGeneric';
import { SelectOptionsGroupPropTypes } from '../../utils/propTypes';

const SelectOptionsGroup = ({ options }) => {
  return (
    <div className="home__header-select-group">
      <select className="home__header-select">
        {options.map((option, index) => (
          <option key={index} value={`opcion${index + 1}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectOptionsGroup.propTypes = SelectOptionsGroupPropTypes;

const Home = () => {
  const userResponseString = localStorage.getItem('userResponse');

  if (userResponseString) {
    try {
      const userResponse = JSON.parse(userResponseString);

      if (userResponse.data && userResponse.data.user) {
        return <Navigate to="/dashboard" />;
      }
    } catch (error) {
      // Maneja cualquier error al analizar JSON
    }
  }

  const solutionsOptions = ['Solución'];
  const helpOptions = ['Ayuda'];
  const title = 'Gestiona tu inventario de una manera más sencilla.';
  const description1 =
    'Ten el control de tu inventario a través de las diferentes funcionalidades que StockFlow tiene para ti y haz crecer tu negocio.';
  const description2 =
    'Úsalo desde cualquier dispositivo y desde cualquier lugar, StockFlow siempre estará ahí para ti.';

  return (
    <div className="home">
      <section className="home__header">
        <div className="home__header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="home__header-options">
          <SelectOptionsGroup options={solutionsOptions} />
          <SelectOptionsGroup options={helpOptions} />
        </div>
      </section>
      <section className="home_main">
        <section className="home_image">
          <img src={portada} alt="portada" />
        </section>
        <section className="home_content">
          <h4 className="home__title">{title}</h4>
          <p className="home__description">{description1}</p>
          <p className="home__description">{description2}</p>
          <div className="button__home">
            <Link to="/register">
              <ButtonGeneric buttonContent="Comenzar Ahora" />
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
