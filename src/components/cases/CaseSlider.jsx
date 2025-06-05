import PropTypes from 'prop-types'
import { useEffect, useState, useRef } from 'react'
import { CaseCard } from './CaseCard'
import caseData from '../data/caseData'

export function CaseSlider({ cases }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef(null)
  const delay = 5000

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % cases.length)
    }, delay)
    return () => resetTimeout()
  }, [activeIndex, cases.length])

  const handleDotClick = index => {
    resetTimeout()
    setActiveIndex(index)
  }

  return (
    <div
      className="relative mt-8 h-[600px]"
      onMouseEnter={resetTimeout}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setActiveIndex(prev => (prev + 1) % cases.length)
        }, delay)
      }}
    >
      {cases.map((caseData, index) => (
        <CaseCard key={caseData.title} {...caseData} isActive={index === activeIndex} />
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {cases.map((_, index) => (
          <button
            type="button"
            key={`${caseData.title}-${index}`}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-purple-500' : 'bg-white/30'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

CaseSlider.propTypes = {
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}
