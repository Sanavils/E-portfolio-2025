import React from 'react'
import styled from 'styled-components'
import ProjectTitle from '../composants/ProjectTitle'

export default function Vanilla() {
    return (
        <>
            <h1 className="Title">Vanilla<span className="CAPS-Small-text">[3]</span></h1>

            <ProjectTitle
                Branding= "Branding"
                Project="Vanilla"
                imageUrl="/E-portfolio-2025/image copy 2.png"
                DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
            />
            

            <div className='overview'>
                <h2 className="H2">Overview</h2>
                <p>Vanilla is more than a pastry shop; it’s a movement toward conscious indulgence. The branding process focused on capturing this vision—elegance rooted in sustainability. From a carefully designed logo to a digital presence that highlights both aesthetics and ethics, every detail was crafted to reflect the essence of the brand. The outcome is a harmonious blend of visual identity, storytelling, and user experience that invites customers to engage with a responsible and delicious approach to pastry.</p>
            </div>

            <div>
                <h2 className="H2">FIGMA FILE</h2>
                <div>
                    <p style={{textAlign: 'center', margin: '20px 0'}}>Figma file embedding pending...</p>
                    {/* <iframe className='iframe'  width="100%" height="750" src="" allowfullscreen></iframe> */}
                </div>
            </div>
            
        </>
    )
  }
