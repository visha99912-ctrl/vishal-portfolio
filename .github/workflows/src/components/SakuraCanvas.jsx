import React, { useRef, useEffect, useCallback } from 'react'

class Petal {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.reset(true)
  }

  reset(initial = false) {
    this.x = Math.random() * this.canvasWidth
    this.y = initial ? Math.random() * this.canvasHeight : -20
    this.size = Math.random() * 8 + 4
    this.speedY = Math.random() * 1.5 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.8
    this.rotation = Math.random() * 360
    this.rotationSpeed = (Math.random() - 0.5) * 2
    this.opacity = Math.random() * 0.5 + 0.3
    this.swayPhase = Math.random() * Math.PI * 2
    this.swaySpeed = Math.random() * 0.02 + 0.01
    this.swayAmplitude = Math.random() * 1.5 + 0.5
    this.color = this.getRandomColor()
  }

  getRandomColor() {
    const colors = [
      'rgba(255, 183, 197, ',
      'rgba(255, 218, 224, ',
      'rgba(255, 192, 203, ',
      'rgba(255, 240, 245, ',
      'rgba(230, 200, 230, ',
      'rgba(255, 228, 235, ',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  update(windX = 0) {
    this.y += this.speedY
    this.swayPhase += this.swaySpeed
    this.x += this.speedX + Math.sin(this.swayPhase) * this.swayAmplitude + windX
    this.rotation += this.rotationSpeed

    if (this.y > this.canvasHeight + 20) {
      this.reset()
    }
    if (this.x > this.canvasWidth + 20) {
      this.x = -20
    } else if (this.x < -20) {
      this.x = this.canvasWidth + 20
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate((this.rotation * Math.PI) / 180)
    ctx.globalAlpha = this.opacity

    ctx.beginPath()
    ctx.moveTo(0, -this.size)
    ctx.bezierCurveTo(
      this.size * 0.6, -this.size * 0.6,
      this.size * 0.6, this.size * 0.3,
      0, this.size
    )
    ctx.bezierCurveTo(
      -this.size * 0.6, this.size * 0.3,
      -this.size * 0.6, -this.size * 0.6,
      0, -this.size
    )
    ctx.fillStyle = this.color + this.opacity + ')'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, -this.size * 0.5)
    ctx.lineTo(0, this.size * 0.5)
    ctx.strokeStyle = this.color + (this.opacity * 0.5) + ')'
    ctx.lineWidth = 0.5
    ctx.stroke()

    ctx.restore()
  }
}

const SakuraCanvas = ({ scrollY }) => {
  const canvasRef = useRef(null)
  const petalsRef = useRef([])
  const animationRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const windRef = useRef(0)

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      petalsRef.current = Array.from({ length: 60 }, () => new Petal(width, height))
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      const targetWind = (mouseRef.current.x - width / 2) / width * 0.5
      windRef.current += (targetWind - windRef.current) * 0.02

      petalsRef.current.forEach(petal => {
        petal.update(windRef.current)
        petal.draw(ctx)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [handleMouseMove])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ 
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: 0.9 
      }}
    />
  )
}

export default SakuraCanvas