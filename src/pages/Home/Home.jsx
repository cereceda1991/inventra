import './Home.css'
import portada from '../../assets/landing-inventra-1.webp'
import logo from '../../assets/logo-azul-inventra-042.webp'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SelectOptionsGroup = ({ options }) => {
  return (
    <div className='home__header-select-group'>
      <select className='home__header-select'>
        {options.map((option, index) => (
          <option key={index} value={`opcion${index + 1}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

SelectOptionsGroup.propTypes = {
  options: PropTypes.array.isRequired
}

const Home = () => {
  const solucionesOptions = ['Solución', 'Solución 2']
  const ayudaOptions = ['Ayuda', 'Ayuda 2']
  const title = 'Gestiona tu inventario de una manera más sencilla.'
  const description1 =
    'Ten el control de tu inventario a través de las diferentes funcionalidades que Inventra tiene para ti y haz crecer tu negocio.'
  const description2 =
    'Úsalo desde cualquier dispositivo y desde cualquier lugar, Inventra siempre estará ahí para ti.'

  return (
    <div className='home'>
      <section className='home__header'>
        <div className='home__header-logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='home__header-options'>
          <SelectOptionsGroup options={solucionesOptions} />
          <SelectOptionsGroup options={ayudaOptions} />
        </div>
      </section>
      <section className='home_main'>
        <section className='home_image'>
          <img src={portada} alt='portada' />
        </section>
        <section className='home_content'>
          <h4 className='home__title'>{title}</h4>
          <p className='home__description'>{description1}</p>
          <p className='home__description'>{description2}</p>
          <button className='home__button'>
            <Link to='./register'>COMENZAR AHORA</Link>
          </button>
        </section>
      </section>
    </div>
  )
}

export default Home
