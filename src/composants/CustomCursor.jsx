import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  display: none;
  
  @media (pointer: fine) {
    display: block;
  }
`

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  display: none;
  align-items: center;
  justify-content: center;
  font-family: 'Neue Montreal', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000;
  white-space: nowrap;
  opacity: 0;
  transition: width 0.25s cubic-bezier(0.25, 1, 0.5, 1), height 0.25s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.25s, border-color 0.25s;

  @media (pointer: fine) {
    display: flex;
  }
`

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // Add CSS class to body to hide native cursor
    document.body.classList.add('custom-cursor-active')

    const dot = dotRef.current
    const ring = ringRef.current

    // Set initial position out of view
    gsap.set([dot, ring], { x: -100, y: -100 })
    gsap.set(ring, { opacity: 1 })

    // quickTo for ultra-smooth tracking
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" })
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" })

    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" })
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" })

    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      xToDot(mouseX)
      yToDot(mouseY)
      xToRing(mouseX)
      yToRing(mouseY)
    }

    window.addEventListener('mousemove', onMouseMove)

    // Event delegation for hovers
    const onMouseOver = (e) => {
      const target = e.target
      
      const isLink = target.closest('a') || target.closest('button') || target.closest('.arrow-link');
      const isProject = target.closest('.ImgSemi') || (target.closest('a') && target.closest('a').getAttribute('href')?.includes('/work'));

      if (isProject) {
        gsap.to(ring, {
          width: 80,
          height: 80,
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          borderColor: '#000',
          duration: 0.25
        })
        ring.innerText = 'VIEW'
        gsap.to(dot, { scale: 0, duration: 0.2 })
      } else if (isLink) {
        gsap.to(ring, {
          width: 50,
          height: 50,
          backgroundColor: '#000',
          borderColor: '#000',
          color: '#fff',
          duration: 0.25
        })
        gsap.to(dot, { scale: 0, duration: 0.2 })
      }
    }

    const onMouseOut = (e) => {
      const target = e.target
      const isLink = target.closest('a') || target.closest('button') || target.closest('.arrow-link');
      const isProject = target.closest('.ImgSemi') || (target.closest('a') && target.closest('a').getAttribute('href')?.includes('/work'));

      if (isLink || isProject) {
        gsap.to(ring, {
          width: 40,
          height: 40,
          backgroundColor: 'transparent',
          borderColor: '#000',
          color: '#000',
          duration: 0.25
        })
        ring.innerText = ''
        gsap.to(dot, { scale: 1, duration: 0.2 })
      }
    }

    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return (
    <>
      <CursorDot ref={dotRef} className="cursor-dot" />
      <CursorRing ref={ringRef} className="cursor-ring" />
    </>
  )
}
