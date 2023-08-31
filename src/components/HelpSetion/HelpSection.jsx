import { useState } from 'react'
import './HelpSection.css'
import { IconArrowRigth } from '../../utils/CustomIcons'
import { faqs } from '../../API/dataFaqs'

const HelpSection = () => {
  const [collapsedIndex, setCollapsedIndex] = useState(null)

  const toggleCollapse = (index) => {
    if (collapsedIndex === index) {
      setCollapsedIndex(null)
    } else {
      setCollapsedIndex(index)
    }
  }

  return (
    <div className='help-section'>
      <h2>Sección de Ayuda</h2>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div className='faq' key={index}>
            <div className='faq-question' onClick={() => toggleCollapse(index)}>
              <span>{faq.question}</span>
              <span className={`icon ${collapsedIndex === index ? 'expanded' : ''}`}>
                {collapsedIndex === index ? <IconArrowRigth /> : <IconArrowRigth />}
              </span>
            </div>
            {collapsedIndex === index && <div className='faq-answer'>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HelpSection
