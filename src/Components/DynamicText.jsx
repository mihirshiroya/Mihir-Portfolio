import React, { useState, useEffect } from 'react'

export default function DynamicText() {
  const texts = [
    "Mihir Shiroya",
    "Software Developer"
  ]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer

    const animateText = () => {
      const currentFullText = texts[currentTextIndex]
      const shouldSwitch = !isDeleting && displayText === currentFullText
      const shouldStartDeleting = isDeleting && displayText === ''

      if (shouldSwitch) {
        setIsDeleting(true)
        timer = setTimeout(animateText, 1000) // Pause before deleting
      } else if (shouldStartDeleting) {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
      } else if (isDeleting) {
        setDisplayText((prevText) => prevText.slice(0, -1))
        timer = setTimeout(animateText, 50) // Deleting speed
      } else {
        setDisplayText((prevText) => currentFullText.slice(0, prevText.length + 1))
        timer = setTimeout(animateText, 100) // Typing speed
      }
    }

    timer = setTimeout(animateText, 100)

    return () => clearTimeout(timer)
  }, [currentTextIndex, displayText, isDeleting])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="flex items-start">
      <div className="text-4xl font-bold text-blue-600">
        {displayText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-gray-100 transition-opacity duration-100`}>|</span>
      </div>
    </div>
  )
}