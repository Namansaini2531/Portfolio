import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 2,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  as = 'div'
}) => {
  const containerRef = useRef(null)

  const splitText = useMemo(() => {
    if (typeof children !== 'string') return children

    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word
      return (
        <span className="word" key={index} style={{ display: 'inline-block' }}>
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
      // Rotation effect on container
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true
          }
        }
      )

      const wordElements = el.querySelectorAll('.word')

      if (wordElements.length > 0) {
        // Opacity reveal for words
        gsap.fromTo(
          wordElements,
          { opacity: baseOpacity, willChange: 'opacity' },
          {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=15%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        )

        // Optional blur reveal for words
        if (enableBlur) {
          gsap.fromTo(
            wordElements,
            { filter: `blur(${blurStrength}px)` },
            {
              ease: 'none',
              filter: 'blur(0px)',
              stagger: 0.05,
              scrollTrigger: {
                trigger: el,
                scroller,
                start: 'top bottom-=15%',
                end: wordAnimationEnd,
                scrub: true
              }
            }
          )
        }
      } else {
        // Fallback for non-text / container child elements
        gsap.fromTo(
          el,
          { opacity: baseOpacity, filter: enableBlur ? `blur(${blurStrength}px)` : 'none' },
          {
            ease: 'none',
            opacity: 1,
            filter: 'blur(0px)',
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=15%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength])

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
