'use client'
import Accordion from '@/templates/Accordion'
import Page from '@/templates/Page'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Question 1',
    answer:
      '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas,velit, ipsa cum, eligendi quasi suscipit deserunt facere voluptates sapiente illum perferendis ipsam consequuntur ut modi provident inearum saepe.'
  },
  {
    question: 'Question 2',
    answer:
      '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas,velit, ipsa cum, eligendi quasi suscipit deserunt facere voluptates sapiente illum perferendis ipsam consequuntur ut modi provident inearum saepe.'
  },
  {
    question: 'Question 3',
    answer:
      '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas,velit, ipsa cum, eligendi quasi suscipit deserunt facere voluptates sapiente illum perferendis ipsam consequuntur ut modi provident inearum saepe.'
  }
]

function Faqs() {
  return (
    <>
      <Page />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="faqs">
        <div class="container">
          <div class="faqs">
            <div class="faqs_item">
              <h1>Nostrud exercitation laboris</h1>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            {/*faqs_item*/}
            <div class="faqs_item">
              <h1>Nostrud exercitation laboris</h1>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            {/*faqs_item*/}
          </div>
          {/*faqs*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*faqs#*/}
    </>
  )
}

export default Faqs
