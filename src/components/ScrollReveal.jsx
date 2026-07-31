import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.1,
  baseRotation = 5,
  translateY = 40,
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
        <span className="word" key={index} style={{ display: 'inline-block', willChange: 'transform, opacity' }}>
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

      // 1. Container motion & tilt animation
      gsap.fromTo(
        el,
        { 
          transformOrigin: '0% 50%', 
          rotate: isMobile ? 0 : baseRotation,
          y: translateY
        },
        {
          ease: 'power2.out',
          rotate: 0,
          y: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 95%',
            end: rotationEnd,
            scrub: 1
          }
        }
      )

      const wordElements = el.querySelectorAll('.word')

      if (wordElements.length > 0) {
        // 2. Opacity & motion reveal for individual words
        gsap.fromTo(
          wordElements,
          { opacity: isMobile ? 1 : baseOpacity, y: isMobile ? 0 : translateY * 0.4, willChange: 'opacity, transform' },
          {
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            stagger: isMobile ? 0 : 0.04,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 90%',
              end: wordAnimationEnd,
              scrub: 1
            }
          }
        )
      } else {
        // Opacity & motion reveal for non-text card/component blocks
        gsap.fromTo(
          el,
          { 
            opacity: isMobile ? 1 : baseOpacity, 
            y: translateY
          },
          {
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 90%',
              end: wordAnimationEnd,
              scrub: 1
            }
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [scrollContainerRef, baseRotation, baseOpacity, translateY, rotationEnd, wordAnimationEnd])

  const Component = as

  return (
    <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      {typeof children === 'string' ? (
        <span className={`scroll-reveal-text ${textClassName}`}>{splitText}</span>
      ) : (
        children
      )}
    </Component>
  )
}

export default ScrollReveal
