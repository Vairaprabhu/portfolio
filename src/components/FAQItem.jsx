import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <ChevronDown size={18} className={open ? 'rotated' : ''} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="faq-answer-wrap"
          >
            <div className="faq-answer">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
