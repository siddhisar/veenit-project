import { useEffect, useRef } from 'react'

/**
 * Lightweight animated "cyber network" canvas used as the hero background.
 * Draws moving nodes connected by lines when close — evokes network / threat
 * visualisation. Pauses when tab is hidden and respects reduced-motion.
 */
export default function CyberBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let nodes = []
    let raf = null
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const NODE_COUNT = () => {
      const base = Math.round((width * height) / 22000)
      return Math.max(28, Math.min(90, base))
    }

    function build() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = NODE_COUNT()
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.6
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.3
            ctx.strokeStyle = `rgba(70, 120, 255, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 255, 136, 0.72)'
        ctx.fill()

        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      raf = requestAnimationFrame(draw)
    }

    function start() {
      build()
      if (reduce) {
        draw()
        cancelAnimationFrame(raf)
        return
      }
      cancelAnimationFrame(raf)
      draw()
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else if (!reduce) {
        cancelAnimationFrame(raf)
        draw()
      }
    }

    let resizeTimer = null
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        dpr = Math.min(window.devicePixelRatio || 1, 2)
        start()
      }, 200)
    }

    start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      clearTimeout(resizeTimer)
    }
  }, [])

  return <canvas ref={canvasRef} className="cyber-canvas" aria-hidden="true" />
}
