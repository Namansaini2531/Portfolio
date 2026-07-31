import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseRotation = 3,
  translateY = 30,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'center center',
  wordAnimationEnd = 'center center',
  as = 'div'
}) => {
  const containerRef = useRef(null)

  const splitText = useMemo(() => {
    if (typeof children !== 'string') return children

    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word
      return (
        <span className="word" key={index} style={{ display: 'inline-block', opacity: 1, willChange: 'transform' }}>
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768

      // Always ensure 100% opacity - no white/faded transparency!
      gsap.set(el, { opacity: 1 })

      // Smooth motion entrance (Translation Y & rotation tilt only)
      gsap.fromTo(
        el,
        { 
          transformOrigin: '0% 50%', 
          rotate: isMobile ? 0 : baseRotation,
          y: isMobile ? 0 : translateY,
          opacity: 1
        },
        {
          ease: 'power2.out',
          rotate: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 95%',
            end: rotationEnd,
            scrub: 0.5
          }
        }
      )
    }, el)

    return () => ctx.revert()
  }, [scrollContainerRef, baseRotation, translateY, rotationEnd, wordAnimationEnd])

  const Component = as

  return (
    <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`} style={{ opacity: 1 }}>
      {typeof children === 'string' ? (
        <span className={`scroll-reveal-text ${textClassName}`} style={{ opacity: 1 }}>{splitText}</span>
      ) : (
        children
      )}
    </Component>
  )
}

export default ScrollReveal
