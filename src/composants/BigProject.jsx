import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Credit = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

const Type = styled.div`
display: flex;
align-items: center;
gap: 4px;
`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
`
const ProjTil = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
`
const SemiPhoto = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f0f0f0;
`

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`

const SemiBigProj = styled(Link)`
display: flex;
width : 100%;
flex-direction: column;
align-items: flex-start;
gap: 6px;
text-decoration: none;
color: inherit;

&:hover ${ImageContainer} {
  transform: scale(1.03);
  filter: brightness(0.95);
}
`

// Le composant MyBlock reçoit des props (title, description, imageUrl)
export default function BigProject({ to, Branding, Project, imageUrl, TL, DescriptionText }) {
    return (
        <SemiBigProj to={to || '#'}>
            <Credit>
                <Type>
                    <p className='Small-text'>Type</p>
                    <p className='Small-text'>/ {Branding}</p>
                </Type>
                <Type>
                    <p className='Small-text'>Type</p>
                    <p className='Small-text'>/ Branding</p>
                </Type>
            </Credit>
            <SemiPhoto>
                {imageUrl && <ImageContainer src={imageUrl} alt={Project} />}

            </SemiPhoto>
            <Description>
                <ProjTil>
                    <p className='Caps-text'>{Project}</p>
                    <p className='Small-text'>TL: {TL}</p>
                </ProjTil>
                <p className='Small-text'>{DescriptionText}</p>

            </Description>
        </SemiBigProj>
    )
}