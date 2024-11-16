'use client'

import { useState, useEffect } from 'react'

export default function DynamicText({ name = "John Doe" }) {
  const [text, setText] = useState(name)
  const [isChangingToWebDev, setIsChangingToWebDev] = useState(true)

  useEffect(() => {
    const targetText = isChangingToWebDev ? "Software Developer" : name
    
    if (text === targetText) {
      const timeout = setTimeout(() => {
        setIsChangingToWebDev(!isChangingToWebDev)
      }, 2000) // Wait for 2 seconds before starting the reverse transition
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      if (text.length > targetText.length) {
        setText(text.slice(0, -1))
      } else {
        setText(targetText.slice(0, text.length + 1))
      }
    }, 50) // Change one character every 100ms

    return () => clearTimeout(timeout)
  }, [text, isChangingToWebDev, name])

  return (
  
      <h1 className="text-4xl font-bold text-blue-600 transition-all duration-500 ease-in-out min-w-[300px]">
        {text}
      </h1>
   
  )
}