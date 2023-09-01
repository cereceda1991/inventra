import { CardDashboardBottomPropTypes } from '../../utils/propTypes'
import './CardDashboardBottom.css'

const CardDashboardBottom = ({ icon, title, products }) => {
  return (
    <section className='card__bottom'>
      <section className='card__bottom-header'>
        <h2 className='card-title-bottom'>{title}</h2>
        <div className='card-dashboard-iconbottom'>{icon}</div>
      </section>
      <section className='card__bottom-ul'>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>{product.stock}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

CardDashboardBottom.propTypes = CardDashboardBottomPropTypes

export default CardDashboardBottom
