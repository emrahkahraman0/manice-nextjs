'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="faqs_item_box"
      >
        <div className="heading" onClick={() => setIsOpen(!isOpen)}>
          <h3>{question}</h3>
          <i
            className={`fa-solid ${
              isOpen ? 'fa-chevron-up' : 'fa-chevron-down'
            } chevron-icon ${isOpen ? 'open' : ''}`}
          ></i>
        </div>
        {isOpen && <div className="content">{answer}</div>}
      </motion.div>
      {/*faqs_item_box*/}
    </>
  )
}

export default Accordion
