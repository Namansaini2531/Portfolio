import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.05,
  baseRotation = 6,
  translateY = 40,
  blurStrength = 8,
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
        <span className="word" key={index} style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}>
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
      // 1. Container rotation & vertical movement animation
      gsap.fromTo(
        el,
        { 
          transformOrigin: '0% 50%', 
          rotate: baseRotation,
          y: translateY
        },
        {
          ease: 'power2.out',
          rotate: 0,
          y: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 90%',
            end: rotationEnd,
            scrub: 1
          }
        }
      )

      const wordElements = el.querySelectorAll('.word')

      if (wordElements.length > 0) {
        // 2. Opacity reveal for individual words
        gsap.fromTo(
          wordElements,
          { opacity: baseOpacity, y: translateY * 0.5, willChange: 'opacity, transform' },
          {
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            stagger: 0.04,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 85%',
              end: wordAnimationEnd,
              scrub: 1
            }
          }
        )

        // 3. Blur reveal for words
        if (enableBlur) {
          gsap.fromTo(
            wordElements,
            { filter: `blur(${blurStrength}px)` },
            {
              ease: 'power2.out',
              filter: 'blur(0px)',
              stagger: 0.04,
              scrollTrigger: {
                trigger: el,
                scroller,
                start: 'top 85%',
                end: wordAnimationEnd,
                scrub: 1
              }
            }
          )
        }
      } else {
        // Fallback for non-text card/component blocks
        gsap.fromTo(
          el,
          { 
            opacity: baseOpacity, 
            y: translateY,
            filter: enableBlur ? `blur(${blurStrength}px)` : 'none' 
          },
          {
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 85%',
              end: wordAnimationEnd,
              scrub: 1
            }
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, translateY, rotationEnd, wordAnimationEnd, blurStrength])

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
