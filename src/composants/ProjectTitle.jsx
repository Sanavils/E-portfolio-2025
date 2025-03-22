import React from 'react'
import styled from 'styled-components'

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

`

const SemiBigProj = styled.div`
display: flex;
width : 100%;
flex-direction: column;
align-items: flex-start;
gap: 6px;
`

// Le composant MyBlock reçoit des props (title, description, imageUrl)
export default function ProjectTitle({ Branding, Project, imageUrl, DescriptionText }) {
  return (
        <SemiBigProj>
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
            {imageUrl && <img className='ImgSemi' src={imageUrl}  />}
            
            </SemiPhoto>
            <Description>
                <p className='H2'>{DescriptionText}</p>
            </Description>
        </SemiBigProj>
  )
}