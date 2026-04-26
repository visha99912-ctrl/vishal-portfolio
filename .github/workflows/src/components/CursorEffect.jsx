import React, { useEffect, useRef } from 'react'

const CursorEffect = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      cursorX += dx * 0.15
      cursorY += dy * 0.15

      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <div
        ref={cursorRef}
        className="absolute w-6 h-6 rounded-full border-2 border-sakura-300 mix-blend-multiply"
      >
        <div className="absolute inset-0 rounded-full bg-sakura-200/30 animate-ping" />
      </div>
    </div>
  )
}

export default CursorEffect