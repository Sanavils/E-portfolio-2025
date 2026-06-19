import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MidProject from '../composants/MidProject'
import SmallProject from '../composants/SmallProject'
import BigProject from '../composants/BigProject'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TwoProj = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;
`

const ThreeProj = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;
`

export default function Home() {

  useEffect(() => {
    // 1. Home-specific hero background scale
    gsap.fromTo('.video-fond', 
      { scale: 1.04, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' }
    )

    // 2. Subtitle animation (under Hello title)
    gsap.fromTo('.pres + .H2', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pres',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // 3. Stagger project grids
    gsap.fromTo('.project-grid-trigger > a',
      { opacity: 0, y: 55 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-grid-trigger',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      <div className="fond-couleur">
        <video className="video-fond" controls autoPlay muted loop playsInline>
          <source src="/E-portfolio-2025//v1.mp4" type="video/mp4" />
        </video>
      </div>
       
      <section className='contenu'>
        <h1 className="Title pres">Hello<span className="CAPS-Small-text">[^-^]</span></h1>
        <h2 className="H2" style={{ marginBottom: '116px'}}>My name is HASSEN<br></br>And i’m a UI/UX DESIGNER</h2>
     
        <div className="reveal-text">
          <h2 className="H2">Everything starts with a line—the first mark, the origin of an idea. From this single path, concepts take shape, diverging into new directions before coming together in a unified vision.</h2>
          <p className='overview'>Design is a continuous movement—a living process shaped by rhythm, curiosity, and purpose. It begins with a clear idea, but never stays still. Each project opens new paths, expands in unexpected directions, and evolves through iteration and exploration. It's a journey of pushing boundaries, challenging assumptions, and letting ideas breathe.
<br></br>Even as the work branches out, everything remains connected. Every element, every choice, no matter how far it strays, eventually returns to serve a unified vision—something intentional, refined, and deeply human. That convergence is where the experience finds its strength.
<br></br>My approach follows this logic: structured but not rigid, bold but never loud. I design with clarity, but also with emotion. Every interface, every flow, every gesture is a response to this dynamic process—where form meets function, and creativity meets meaning.</p>
        </div>

      </section>

      
      <section style={{ marginBottom: '116px'}} className="reveal-text">
        <h2 className="Title ">Needing a rebranding ?</h2>
        <Link to="/work" className='arrow-link'>
          <span className="H2">My previous projects</span>
          <img src="/E-portfolio-2025/fleche.svg" alt="" />
        </Link>
        
        <div className='ligne2'></div>
        <a href='mailto:hassen.arkab.pro@gmail.com' className='arrow-link' style={{ marginBottom: '116px'}}>
          <span className="H2" >DROP ME AN EMAIL</span>
          <img src="/E-portfolio-2025/fleche.svg" alt="" />
        </a>
        
        <video className="video-fond" controls autoPlay muted loop playsInline style={{ marginTop: '116px'}}>
          <source src="/E-portfolio-2025/LV.mp4" type="video/mp4" />
        </video>

      </section>
      

      <ThreeProj className="project-grid-trigger">
                  <SmallProject
                      to="/work/abercrombie"
                      Branding= "Branding"
                      Project="Abercrombie"
                      imageUrl="/E-portfolio-2025/Abercrombie.png"
                      TL="10/2024"
                      DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                  />
      
                  <SmallProject
                      to="/work/Serenity"
                      Branding= "Branding"
                      Project="Serenity"
                      imageUrl="/E-portfolio-2025/Serinity.png"
                      TL="10/2024"
                      DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                  />
      
      
                  <SmallProject
                      to="/work/Okane"
                      Branding= "Branding"
                      Project="Okane"
                      imageUrl="/E-portfolio-2025/Okane.png"
                      TL="10/2024"
                      DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                  />
      
              </ThreeProj>

              <div className='ligne'></div>
              <div className='socials'>
                <p>@2025</p>
                <a href='https://www.linkedin.com/in/hassen-arkab-7b49a2225/' target="_blank" rel="noreferrer">LINKEDIN</a>
                <a href='/' target="_blank" rel="noreferrer">TWITTER</a>
                <a href='https://www.instagram.com/hassenarkab/' target="_blank" rel="noreferrer">INSTAGRAM</a>
                <a href='https://discord.com/users/282140827122270208' target="_blank" rel="noreferrer">DISCORD</a>
              </div>
    
    </>
  )
}