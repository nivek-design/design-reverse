"use client"

import { useEffect, useRef } from "react"
import { useReverse } from "@/contexts/reverse-context"
import { useAnimation } from "framer-motion"

export function ReverseEffects() {
  const { isReverse: isReversed } = useReverse()
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])
  const mouseTrailRef = useRef<HTMLDivElement[]>([])
  const mouseTrailRefOriginal = useRef<HTMLDivElement>(null)
  const particlesRefOriginal = useRef<HTMLDivElement>(null)
  const distortionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const particleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isReversed) {
      // Limpar todos os efeitos quando não estiver no modo reverse
      particlesRef.current.forEach((particle) => particle.remove())
      mouseTrailRef.current.forEach((trail) => trail.remove())
      particlesRef.current = []
      mouseTrailRef.current = []
      return
    }

    // Criar partículas 3D
    const createParticles = () => {
      const container = document.body
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "reverse-particle"
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          animation: float ${3 + Math.random() * 4}s ease-in-out infinite alternate;
          opacity: 0.7;
        `
        container.appendChild(particle)
        particlesRef.current.push(particle)
      }
    }

    // Criar rastro do mouse
    const createMouseTrail = (e: MouseEvent) => {
      const trail = document.createElement("div")
      trail.className = "mouse-trail"
      trail.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #ff6b35, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        left: ${e.clientX - 4}px;
        top: ${e.clientY - 4}px;
        animation: trailFade 0.8s ease-out forwards;
      `
      document.body.appendChild(trail)
      mouseTrailRef.current.push(trail)

      // Remover após animação
      setTimeout(() => {
        trail.remove()
        const index = mouseTrailRef.current.indexOf(trail)
        if (index > -1) {
          mouseTrailRef.current.splice(index, 1)
        }
      }, 800)
    }

    // Adicionar estilos de animação
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes trailFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
      }
    `
    document.head.appendChild(style)

    createParticles()
    document.addEventListener("mousemove", createMouseTrail)

    return () => {
      document.removeEventListener("mousemove", createMouseTrail)
      document.head.removeChild(style)
    }
  }, [isReversed])

  useEffect(() => {
    if (!isReversed) return

    // Mouse trail effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTrailRefOriginal.current) return

      const trail = document.createElement("div")
      trail.className = "mouse-trail-dot"
      trail.style.left = e.clientX + "px"
      trail.style.top = e.clientY + "px"

      mouseTrailRefOriginal.current.appendChild(trail)

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail)
        }
      }, 1000)
    }

    // Create particles
    const createParticlesOriginal = () => {
      if (!particlesRefOriginal.current) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "floating-particle"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.top = Math.random() * 100 + "%"
        particle.style.animationDelay = Math.random() * 10 + "s"
        particle.style.animationDuration = Math.random() * 10 + 10 + "s"

        particlesRefOriginal.current.appendChild(particle)
      }
    }

    // Text scramble effect
    const scrambleText = (element: HTMLElement) => {
      const originalText = element.textContent || ""
      const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
      let iterations = 0

      const interval = setInterval(() => {
        element.textContent = originalText
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")

        if (iterations >= originalText.length) {
          clearInterval(interval)
          element.textContent = originalText
        }

        iterations += 1 / 3
      }, 30)
    }

    // Apply text scramble to headings
    const applyTextScramble = () => {
      const headings = document.querySelectorAll("h1, h2, h3")
      headings.forEach((heading) => {
        const element = heading as HTMLElement
        element.addEventListener("mouseenter", () => scrambleText(element))
      })
    }

    // Initialize effects
    document.addEventListener("mousemove", handleMouseMove)
    createParticlesOriginal()
    applyTextScramble()

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      if (particlesRefOriginal.current) {
        particlesRefOriginal.current.innerHTML = ""
      }
    }
  }, [isReversed])

  // Efeito de glitch para textos
  useEffect(() => {
    if (isReversed) {
      const headings = document.querySelectorAll("h1, h2, h3, h4")

      headings.forEach((heading) => {
        heading.classList.add("glitch-text")

        // Criar camadas de glitch
        const dataText = heading.textContent || ""
        const before = document.createElement("span")
        const after = document.createElement("span")

        before.className = "glitch-layer glitch-before"
        after.className = "glitch-layer glitch-after"

        before.setAttribute("data-text", dataText)
        after.setAttribute("data-text", dataText)

        if (!heading.querySelector(".glitch-layer")) {
          heading.appendChild(before)
          heading.appendChild(after)
        }
      })

      // Iniciar animação de glitch
      const glitchInterval = setInterval(() => {
        document.querySelectorAll(".glitch-text").forEach((el) => {
          el.classList.add("active")
          setTimeout(() => el.classList.remove("active"), 200)
        })
      }, 3000)

      return () => {
        clearInterval(glitchInterval)
        headings.forEach((heading) => {
          heading.classList.remove("glitch-text")
          heading.querySelectorAll(".glitch-layer").forEach((layer) => layer.remove())
        })
      }
    }
  }, [isReversed])

  // Efeito de partículas avançadas
  useEffect(() => {
    if (isReversed && particleContainerRef.current) {
      const container = particleContainerRef.current
      const particleCount = 100
      const colors = ["#ff6b35", "#f7931e", "#ffd700", "#ffb347", "#ff7f50"]
      const shapes = ["circle", "square", "triangle", "diamond", "star"]

      // Limpar partículas existentes
      container.innerHTML = ""

      // Criar novas partículas
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        const size = Math.random() * 15 + 5
        const color = colors[Math.floor(Math.random() * colors.length)]
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        const left = Math.random() * 100
        const animationDuration = Math.random() * 15 + 10
        const delay = Math.random() * 5

        particle.className = `reverse-particle shape-${shape}`
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
          left: ${left}%;
          bottom: -50px;
          opacity: 0;
          z-index: 1;
          animation: floatParticle ${animationDuration}s ease-in-out ${delay}s infinite;
        `

        // Aplicar formas diferentes
        if (shape === "triangle") {
          particle.style.width = "0"
          particle.style.height = "0"
          particle.style.borderLeft = `${size / 2}px solid transparent`
          particle.style.borderRight = `${size / 2}px solid transparent`
          particle.style.borderBottom = `${size}px solid ${color}`
          particle.style.background = "transparent"
        } else if (shape === "diamond") {
          particle.style.transform = "rotate(45deg)"
        } else if (shape === "star") {
          particle.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/></svg>`
          particle.style.background = "transparent"
        }

        container.appendChild(particle)
      }

      // Adicionar efeito de ondulação (ripple) ao clicar
      const handleClick = (e: MouseEvent) => {
        const ripple = document.createElement("div")
        const rect = document.body.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height) * 2

        ripple.className = "reverse-ripple"
        ripple.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          top: ${e.clientY - size / 2}px;
          left: ${e.clientX - size / 2}px;
          background: radial-gradient(circle, rgba(255,107,53,0.2) 0%, rgba(255,107,53,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: scale(0);
          opacity: 1;
          animation: rippleEffect 1s ease-out forwards;
        `

        document.body.appendChild(ripple)

        setTimeout(() => ripple.remove(), 1000)
      }

      document.addEventListener("click", handleClick)

      return () => {
        document.removeEventListener("click", handleClick)
      }
    }
  }, [isReversed])

  useEffect(() => {
    if (isReversed) {
      // Efeito de partículas 3D avançadas
      const container = document.createElement("div")
      container.className = "particles-3d-container"
      container.style.cssText = `
        position: fixed;
        inset: 0;
        perspective: 1000px;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
      `
      document.body.appendChild(container)

      const particleCount = 30

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        const size = Math.random() * 60 + 20
        const depth = Math.random() * 1500 - 500

        particle.className = "particle-3d"
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(255,107,53,0.7) 0%, rgba(255,107,53,0) 70%);
          border-radius: 50%;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          transform: translateZ(${depth}px);
          opacity: ${Math.random() * 0.5 + 0.2};
          animation: float3d ${Math.random() * 20 + 10}s ease-in-out infinite alternate;
        `

        container.appendChild(particle)
      }

      // Efeito de movimento parallax para as partículas 3D
      const handleMouseMove = (e: MouseEvent) => {
        const xRatio = e.clientX / window.innerWidth - 0.5
        const yRatio = e.clientY / window.innerHeight - 0.5

        document.querySelectorAll(".particle-3d").forEach((particle) => {
          const depth = Number.parseFloat(
            (particle as HTMLElement).style.transform.match(/translateZ$$([^)]+)$$/)?.[1] || "0",
          )
          const factor = depth / 1000
          ;(particle as HTMLElement).style.transform = `
            translateZ(${depth}px)
            translateX(${xRatio * 50 * factor}px)
            translateY(${yRatio * 50 * factor}px)
          `
        })
      }

      document.addEventListener("mousemove", handleMouseMove)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        container.remove()
      }
    }
  }, [isReversed])

  // Efeito de cursor personalizado
  useEffect(() => {
    if (isReversed) {
      const cursor = document.createElement("div")
      const cursorDot = document.createElement("div")

      cursor.className = "custom-cursor"
      cursorDot.className = "cursor-dot"

      cursor.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid #ff6b35;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, border-color 0.3s;
        mix-blend-mode: difference;
      `

      cursorDot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background-color: #ff6b35;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
      `

      document.body.appendChild(cursor)
      document.body.appendChild(cursorDot)

      const moveCursor = (e: MouseEvent) => {
        cursor.style.top = `${e.clientY}px`
        cursor.style.left = `${e.clientX}px`

        cursorDot.style.top = `${e.clientY}px`
        cursorDot.style.left = `${e.clientX}px`
      }

      const growCursor = () => {
        cursor.style.width = "60px"
        cursor.style.height = "60px"
        cursor.style.borderColor = "#ffd700"
      }

      const shrinkCursor = () => {
        cursor.style.width = "40px"
        cursor.style.height = "40px"
        cursor.style.borderColor = "#ff6b35"
      }

      document.addEventListener("mousemove", moveCursor)

      document.querySelectorAll("a, button, input, textarea, select, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", growCursor)
        el.addEventListener("mouseleave", shrinkCursor)
      })

      return () => {
        document.removeEventListener("mousemove", moveCursor)

        document.querySelectorAll("a, button, input, textarea, select, [role='button']").forEach((el) => {
          el.removeEventListener("mouseenter", growCursor)
          el.removeEventListener("mouseleave", shrinkCursor)
        })

        cursor.remove()
        cursorDot.remove()
      }
    }
  }, [isReversed])

  useEffect(() => {
    if (isReversed) {
      // Criar canvas para efeito de distorção
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      canvas.className = "distortion-canvas"
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.2;
        mix-blend-mode: overlay;
      `

      document.body.appendChild(canvas)

      // Configurar tamanho do canvas
      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)

      // Variáveis para animação
      let time = 0
      let mouseX = 0
      let mouseY = 0

      // Atualizar posição do mouse
      const updateMouse = (e: MouseEvent) => {
        mouseX = e.clientX / window.innerWidth
        mouseY = e.clientY / window.innerHeight
      }

      document.addEventListener("mousemove", updateMouse)

      // Função de animação
      const animate = () => {
        if (!ctx || !isReversed) return

        // Limpar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Desenhar padrão de distorção
        const gridSize = 30
        const amplitude = 15 * (0.5 + mouseY)
        const frequency = 0.05 * (0.5 + mouseX)

        ctx.strokeStyle = "rgba(255, 107, 53, 0.5)"
        ctx.lineWidth = 1

        // Linhas horizontais
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()

          for (let x = 0; x < canvas.width; x += 5) {
            const distanceToMouse = Math.sqrt(
              Math.pow((x / canvas.width - mouseX) * 2, 2) + Math.pow((y / canvas.height - mouseY) * 2, 2),
            )

            const distortionFactor = Math.max(0, 1 - distanceToMouse) * amplitude

            const yOffset =
              Math.sin(x * frequency + time) * amplitude +
              Math.sin(x * 0.02 + time * 0.1) * amplitude * 0.5 +
              distortionFactor * Math.sin(time * 2)

            ctx.lineTo(x, y + yOffset)
          }

          ctx.stroke()
        }

        // Linhas verticais com menos frequência
        for (let x = 0; x < canvas.width; x += gridSize * 2) {
          ctx.beginPath()

          for (let y = 0; y < canvas.height; y += 5) {
            const distanceToMouse = Math.sqrt(
              Math.pow((x / canvas.width - mouseX) * 2, 2) + Math.pow((y / canvas.height - mouseY) * 2, 2),
            )

            const distortionFactor = Math.max(0, 1 - distanceToMouse) * amplitude * 0.7

            const xOffset =
              Math.sin(y * frequency * 0.5 + time * 0.7) * amplitude * 0.5 + distortionFactor * Math.sin(time * 1.5)

            ctx.lineTo(x + xOffset, y)
          }

          ctx.stroke()
        }

        time += 0.01

        if (isReversed) {
          requestAnimationFrame(animate)
        }
      }

      const animationFrame = requestAnimationFrame(animate)

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        document.removeEventListener("mousemove", updateMouse)
        cancelAnimationFrame(animationFrame)
        canvas.remove()
      }
    }
  }, [isReversed])

  // Efeito de parallax
  useEffect(() => {
    if (isReversed) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight

        document.querySelectorAll(".parallax-element").forEach((el, i) => {
          const depth = i / 5
          const moveX = x * depth * 100
          const moveY = y * depth * 100

          el.setAttribute("style", `transform: translate(${moveX}px, ${moveY}px);`)
        })
      }

      // Adicionar classe parallax a elementos
      const images = document.querySelectorAll("img:not(.no-parallax)")
      images.forEach((img) => img.classList.add("parallax-element"))

      document.addEventListener("mousemove", handleMouseMove)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        images.forEach((img) => img.classList.remove("parallax-element"))
      }
    }
  }, [isReversed])

  useEffect(() => {
    if (isReversed) {
      // Efeito de texto embaralhado (scramble)
      const headings = document.querySelectorAll("h1, h2, h3")

      // Função para embaralhar texto
      const scrambleText = (element: Element) => {
        const originalText = element.textContent || ""
        const originalHTML = element.innerHTML

        // Armazenar o texto original como atributo
        if (!element.getAttribute("data-original-text")) {
          element.setAttribute("data-original-text", originalText)
          element.setAttribute("data-original-html", originalHTML)
        }

        // Verificar se o elemento tem tags HTML
        if (originalHTML !== originalText) {
          return // Pular elementos com HTML complexo
        }

        // Caracteres para embaralhamento
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,./<>?"

        // Duração da animação
        const duration = 1500
        const frameRate = 30
        const frameDuration = 1000 / frameRate
        const frames = duration / frameDuration

        let frame = 0

        // Função para atualizar o texto
        const updateText = () => {
          if (frame >= frames) {
            element.textContent = element.getAttribute("data-original-text")
            return
          }

          const progress = frame / frames
          const originalLength = originalText.length

          // Quantos caracteres mostrar do texto original
          const originalChars = Math.floor(progress * originalLength)

          let scrambledText = ""

          for (let i = 0; i < originalLength; i++) {
            if (i < originalChars) {
              scrambledText += originalText[i]
            } else if (originalText[i] === " ") {
              scrambledText += " "
            } else {
              scrambledText += chars[Math.floor(Math.random() * chars.length)]
            }
          }

          element.textContent = scrambledText
          frame++

          requestAnimationFrame(updateText)
        }

        updateText()
      }

      // Adicionar evento de hover para acionar o efeito
      headings.forEach((heading) => {
        heading.classList.add("scramble-text")

        heading.addEventListener("mouseenter", () => {
          scrambleText(heading)
        })
      })

      // Acionar o efeito aleatoriamente em alguns títulos
      const randomScramble = () => {
        if (!isReversed) return

        const randomHeading = headings[Math.floor(Math.random() * headings.length)]
        scrambleText(randomHeading)

        // Agendar próximo embaralhamento
        setTimeout(randomScramble, Math.random() * 5000 + 5000)
      }

      // Iniciar após um pequeno atraso
      const initialTimeout = setTimeout(randomScramble, 3000)

      return () => {
        clearTimeout(initialTimeout)

        // Restaurar textos originais
        headings.forEach((heading) => {
          heading.classList.remove("scramble-text")

          const originalHTML = heading.getAttribute("data-original-html")
          if (originalHTML) {
            heading.innerHTML = originalHTML
          }

          heading.removeAttribute("data-original-text")
          heading.removeAttribute("data-original-html")
        })
      }
    }
  }, [isReversed])

  // Efeito de 3D tilt nos cards
  useEffect(() => {
    if (isReversed) {
      const cards = document.querySelectorAll(".card, [class*='card']")

      cards.forEach((card) => {
        card.classList.add("tilt-card")

        const handleMouseMove = (e: MouseEvent) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const centerX = rect.width / 2
          const centerY = rect.height / 2

          const rotateX = (y - centerY) / 10
          const rotateY = (centerX - x) / 10
          ;(e.currentTarget as HTMLElement).style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
          ;(e.currentTarget as HTMLElement).style.transition = "transform 0.1s ease"
        }

        const handleMouseLeave = (e: MouseEvent) => {
          ;(e.currentTarget as HTMLElement).style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
          ;(e.currentTarget as HTMLElement).style.transition = "transform 0.5s ease"
        }

        card.addEventListener("mousemove", handleMouseMove as EventListener)
        card.addEventListener("mouseleave", handleMouseLeave as EventListener)
      })

      return () => {
        cards.forEach((card) => {
          card.classList.remove("tilt-card")
          card.removeAttribute("style")
          card.removeEventListener("mousemove", null as unknown as EventListener)
          card.removeEventListener("mouseleave", null as unknown as EventListener)
        })
      }
    }
  }, [isReversed])

  useEffect(() => {
    if (isReversed) {
      // Efeito de rastro de mouse
      const trailContainer = document.createElement("div")
      trailContainer.className = "mouse-trail-container"
      trailContainer.style.cssText = `
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9997;
        overflow: hidden;
      `
      document.body.appendChild(trailContainer)

      const trailCount = 20
      const trails: HTMLDivElement[] = []

      // Criar elementos de rastro
      for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement("div")
        trail.className = "mouse-trail"
        trail.style.cssText = `
          position: absolute;
          width: ${8 + (trailCount - i) / 2}px;
          height: ${8 + (trailCount - i) / 2}px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          opacity: ${((trailCount - i) / trailCount) * 0.5};
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: ${9997 + i};
          filter: blur(${i / 5}px);
          transition: transform 0.1s ease-out, opacity 0.2s ease-out;
        `
        trailContainer.appendChild(trail)
        trails.push(trail)
      }

      // Posições do mouse
      const mousePositions: { x: number; y: number }[] = Array(trailCount).fill({ x: 0, y: 0 })

      // Atualizar posições do rastro
      const updateTrail = (e: MouseEvent) => {
        mousePositions.unshift({ x: e.clientX, y: e.clientY })
        mousePositions.pop()

        trails.forEach((trail, index) => {
          const position = mousePositions[Math.min(index, mousePositions.length - 1)]

          if (position) {
            trail.style.transform = `translate(${position.x}px, ${position.y}px) scale(${1 - (index / trailCount) * 0.5})`

            // Efeito de pulso aleatório
            if (Math.random() < 0.01) {
              trail.style.transform += " scale(1.5)"
              setTimeout(() => {
                trail.style.transform = `translate(${position.x}px, ${position.y}px) scale(${1 - (index / trailCount) * 0.5})`
              }, 100)
            }
          }
        })
      }

      document.addEventListener("mousemove", updateTrail)

      return () => {
        document.removeEventListener("mousemove", updateTrail)
        trailContainer.remove()
      }
    }
  }, [isReversed])

  useEffect(() => {
    if (isReversed) {
      // Efeito de vinheta e aberração cromática
      const overlay = document.createElement("div")
      overlay.className = "reverse-overlay"
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9996;
        background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.4) 100%);
        mix-blend-mode: multiply;
      `
      document.body.appendChild(overlay)

      // Efeito de aberração cromática
      const chromaticAberration = document.createElement("div")
      chromaticAberration.className = "chromatic-aberration"
      chromaticAberration.style.cssText = `
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9995;
        opacity: 0.1;
        mix-blend-mode: screen;
      `
      document.body.appendChild(chromaticAberration)

      // Atualizar efeito de aberração cromática com movimento do mouse
      const updateAberration = (e: MouseEvent) => {
        const xRatio = (e.clientX / window.innerWidth - 0.5) * 5
        const yRatio = (e.clientY / window.innerHeight - 0.5) * 5

        chromaticAberration.style.boxShadow = `
          ${xRatio}px ${yRatio}px 0 rgba(255, 0, 0, 0.5),
          ${-xRatio}px ${-yRatio}px 0 rgba(0, 255, 255, 0.5)
        `
      }

      document.addEventListener("mousemove", updateAberration)

      // Efeito de pulso na vinheta
      let pulseIntensity = 0
      let increasing = true

      const pulseVignette = () => {
        if (!isReversed) return

        if (increasing) {
          pulseIntensity += 0.01
          if (pulseIntensity >= 0.2) increasing = false
        } else {
          pulseIntensity -= 0.01
          if (pulseIntensity <= 0) increasing = true
        }

        overlay.style.background = `radial-gradient(circle at 50% 50%, transparent ${50 - pulseIntensity * 100}%, rgba(0, 0, 0, ${0.4 + pulseIntensity}) 100%)`

        requestAnimationFrame(pulseVignette)
      }

      const pulseAnimation = requestAnimationFrame(pulseVignette)

      return () => {
        document.removeEventListener("mousemove", updateAberration)
        cancelAnimationFrame(pulseAnimation)
        overlay.remove()
        chromaticAberration.remove()
      }
    }
  }, [isReversed])

  return (
    <div ref={containerRef} className="reverse-effects-container">
      {/* Mouse Trail Container */}
      <div
        ref={mouseTrailRefOriginal}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Floating Particles Container */}
      <div ref={particlesRefOriginal} className="fixed inset-0 pointer-events-none z-10" />

      {/* Page Distortion Grid */}
      <div
        ref={distortionRef}
        className="fixed inset-0 pointer-events-none z-20 opacity-20"
        style={{
          background: `
            linear-gradient(90deg, transparent 98%, rgba(255, 107, 53, 0.3) 100%),
            linear-gradient(0deg, transparent 98%, rgba(255, 107, 53, 0.3) 100%)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: "radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.4) 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Chromatic Aberration Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 0, 255, 0.1) 0%, transparent 50%)
          `,
          animation: "chromatic-shift 4s ease-in-out infinite alternate",
        }}
      />
      {isReversed && (
        <div ref={particleContainerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
      )}

      {isReversed && (
        <>
          {/* Elementos decorativos flutuantes */}
          <div className="fixed top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 blur-xl opacity-30 animate-float-slow pointer-events-none"></div>
          <div className="fixed bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-400 blur-xl opacity-20 animate-float-medium pointer-events-none"></div>
          <div className="fixed top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 blur-lg opacity-25 animate-float-fast pointer-events-none"></div>

          {/* Novos elementos decorativos */}
          <div className="fixed top-1/4 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-red-400 to-orange-300 blur-xl opacity-15 animate-pulse-slow pointer-events-none"></div>
          <div className="fixed bottom-1/3 left-1/5 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400 to-orange-200 blur-xl opacity-10 animate-float-reverse pointer-events-none"></div>

          {/* Formas geométricas */}
          <div className="fixed top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-300 blur-sm opacity-20 transform rotate-45 animate-rotate-slow pointer-events-none"></div>
          <div className="fixed bottom-1/4 left-1/4 w-20 h-20 clip-triangle bg-gradient-to-tr from-red-400 to-orange-300 blur-sm opacity-15 animate-float-rotate pointer-events-none"></div>

          {/* Linhas geométricas */}
          <div className="fixed top-0 left-0 w-full h-screen pointer-events-none">
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

            {/* Novas linhas */}
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/15 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>

            {/* Grade diagonal */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #ff6b35, #ff6b35 1px, transparent 1px, transparent 30px), repeating-linear-gradient(135deg, #ff6b35, #ff6b35 1px, transparent 1px, transparent 30px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          {/* Efeito de escaneamento */}
          <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-scan-vertical"></div>
          </div>

          {/* Efeito de borda glowing */}
          <div className="fixed inset-0 pointer-events-none border border-orange-500/20 z-10 animate-pulse-slow"></div>
        </>
      )}
    </div>
  )
}
