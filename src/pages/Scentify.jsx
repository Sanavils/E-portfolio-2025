import React from 'react'
import styled from 'styled-components'
import ProjectTitle from '../composants/ProjectTitle'

export default function Scientify() {
    return (
        <>
            <h1 className="Title">ABERCROMBIE<span className="CAPS-Small-text">[1]</span></h1>

            <ProjectTitle
                Branding= "Branding"
                Project="Scientify"
                imageUrl="/Scientify.png"
                DescriptionText="This project focused on modernizing the brand’s image with a bold, dynamic logo that stays true to its heritage while appealing to a younger audience."
            />
            

            <div className='overview'>
                <h2 className="H2">Overview</h2>
                <p>Vanilla is more than a pastry shop; it’s a movement toward conscious indulgence. The branding process focused on capturing this vision—elegance rooted in sustainability. From a carefully designed logo to a digital presence that highlights both aesthetics and ethics, every detail was crafted to reflect the essence of the brand. The outcome is a harmonious blend of visual identity, storytelling, and user experience that invites customers to engage with a responsible and delicious approach to pastry.</p>
            </div>

            <div>
                <h2 className="H2">FIGMA FILE</h2>
                <div>
                    <iframe className='iframe'  width="100%" height="750" src="https://embed.figma.com/design/9TTnKyWP92BjJjJJHRpFEc/Scentify?node-id=0-1&embed-host=share" allowfullscreen></iframe>
                </div>
            </div>
            
        </>
    )
  }
  