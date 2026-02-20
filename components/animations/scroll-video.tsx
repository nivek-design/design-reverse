"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ScrollVideoProps {
  src: string
  className?: string
  poster?: string
  muted?: boolean
  loop?: boolean
  controls?: boolean
  threshold?: number
}

export function ScrollVideo({
  src,
  className = "",
  poster,
  muted = true,
  loop = true,
  controls = false,
  threshold = 0.3,
}: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        
        if (entry.isIntersecting && !isPlaying) {
          video.play().then(() => {
            setIsPlaying(true)
          }).catch((error) => {
            console.log("Video autoplay failed:", error)
          })
        } else if (!entry.isIntersecting && isPlaying) {
          video.pause()
          setIsPlaying(false)
        }
      },
      {
        threshold,
      }
    )

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [threshold, isPlaying])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover rounded-xl"
        onLoadStart={() => console.log("Video loading started")}
        onCanPlay={() => console.log("Video can play")}
        onError={(e) => console.error("Video error:", e)}
      />
    </motion.div>
  )
}
