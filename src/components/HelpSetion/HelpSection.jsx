import { useState } from 'react'
import './HelpSection.css'
import { dataFaqs } from '../../API/dataFaqs'

import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'

const HelpSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className='help-section'>
      <h2>Sección de Ayuda</h2>
      <div className='faq-list'>
        {dataFaqs.map((faq, index) => (
          <div className='faq' key={index}>
            <div
              className={`faq__question ${
                expandedIndex === index ? 'faq__question--expanded' : ''
              }`}
              onClick={() => toggleExpand(index)}
            >
              <span className='faq__question-text'>{faq.question}</span>
              <span className={`faq__icon ${expandedIndex === index ? 'faq__icon--expanded' : ''}`}>
                {expandedIndex === index ? <IoIosArrowUp /> : <IoIosArrowForward />}
              </span>
            </div>
            <div
              className={`faq__answer ${expandedIndex === index ? 'faq__answer--expanded' : ''}`}
            >
              <p>{faq.answer}</p>
              <ul>
                {faq.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HelpSection
