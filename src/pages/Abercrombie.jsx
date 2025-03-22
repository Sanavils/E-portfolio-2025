import React from 'react'
import styled from 'styled-components'
import ProjectTitle from '../composants/ProjectTitle'

export default function Abercrombie() {
    return (
        <>
            <h1 className="Title">ABERCROMBIE<span className="CAPS-Small-text">[1]</span></h1>

            <ProjectTitle
                Branding= "Branding"
                Project="Abercrombie"
                imageUrl="/image copy 2.png"
                DescriptionText="This project focused on modernizing the brand’s image with a bold, dynamic logo that stays true to its heritage while appealing to a younger audience."
            />
        </>
    )
  }
  