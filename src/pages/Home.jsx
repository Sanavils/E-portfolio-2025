import React from 'react'
import styled from 'styled-components'
import MidProject from '../composants/MidProject'
import SmallProject from '../composants/SmallProject'
import BigProject from '../composants/BigProject'

export default function Home() {

  const TwoProj = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
  `

  const ThreeProj = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
  `

    return (
      <>
        <div className="fond-couleur">
          <video className="video-fond" controls autoPlay muted loop playsInline>
            <source src="/v1.mp4" type="video/mp4" />
          </video>
        </div>
        
        <section className='contenu'>
          <h1 className="Title pres">Hello<span className="CAPS-Small-text">[^-^]</span></h1>
          <h2 className="H2" style={{ marginBottom: '116px'}}>My name is HASSEN<br></br>And i’m a UI/UX DESIGNER</h2>
       
          <div >
            <h2 className="H2">Everything starts with a line—the first mark, the origin of an idea. From this single path, concepts take shape, diverging into new directions before coming together in a unified vision.</h2>
            <p className='overview'>Design is a continuous movement—a living process shaped by rhythm, curiosity, and purpose. It begins with a clear idea, but never stays still. Each project opens new paths, expands in unexpected directions, and evolves through iteration and exploration. It's a journey of pushing boundaries, challenging assumptions, and letting ideas breathe.
<br></br>Even as the work branches out, everything remains connected. Every element, every choice, no matter how far it strays, eventually returns to serve a unified vision—something intentional, refined, and deeply human. That convergence is where the experience finds its strength.
<br></br>My approach follows this logic: structured but not rigid, bold but never loud. I design with clarity, but also with emotion. Every interface, every flow, every gesture is a response to this dynamic process—where form meets function, and creativity meets meaning.</p>
          </div>

        </section>

        
        <section style={{ marginBottom: '116px'}}>
          <h2 className="Title ">Needing a rebranding ?</h2>
          <a href='' className='arrow-link'>
            <a className="H2">My previous projects</a>
            <img src="/fleche.svg" alt="" />
          </a>
          
          <div className='ligne2'></div>
          <a href='' className='arrow-link' style={{ marginBottom: '116px'}}>
            <a className="H2" >DROP ME AN EMAIL</a>
            <img src="/fleche.svg" alt="" />
          </a>
          
          <video className="video-fond" controls autoPlay muted loop playsInline style={{ marginTop: '116px'}}>
            <source src="/v2.mp4" type="video/mp4" />
          </video>

        </section>
        

        <ThreeProj>
                    <SmallProject
                        Branding= "Branding"
                        Project="Abercrombie"
                        imageUrl="/Abercrombie.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />
        
                    <SmallProject
                        Branding= "Branding"
                        Project="Abercrombie"
                        imageUrl="/Serinity.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />
        
        
                    <SmallProject
                        Branding= "Branding"
                        Project="Abercrombie"
                        imageUrl="/Okane.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />
        
                </ThreeProj>

                <div className='ligne'></div>
                <div className='socials'>
                  <p>@2025</p>
                  <a href='https://www.linkedin.com/in/hassen-arkab-7b49a2225/' target="_blank">LINKEDIN</a>
                  <a href='/' target="_blank">TWITTER</a>
                  <a href='https://www.instagram.com/hassenarkab/' target="_blank">INSTAGRAM</a>
                  <a href='https://discord.com/users/282140827122270208' target="_blank">DISCORD</a>
                </div>
      
      </>
    )
  }
  