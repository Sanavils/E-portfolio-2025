import React from 'react'
import styled from 'styled-components'
import MidProject from '../composants/MidProject'
import SmallProject from '../composants/SmallProject'
import BigProject from '../composants/BigProject'


export default function Work() {


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
align-self: stretch;;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 24px;
}
`


    return (
        <>
            <div className='zonning'>

                <h1 className="Title">ALL<span className="CAPS-Small-text">[12]</span></h1>

                <TwoProj>
                    <MidProject
                        to="/E-portfolio-2025/work/Abercrombie"
                        Branding="Branding"
                        Project="Abercrombie"
                        imageUrl="./Abercrombie-v2.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                    <MidProject
                        to="/E-portfolio-2025/work/Scentify"
                        Branding="Branding"
                        Project="Scentify"
                        imageUrl="./Scientify.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                </TwoProj>

                <ThreeProj>
                    <SmallProject
                        to="/E-portfolio-2025/work/Serenity"
                        Branding="Branding"
                        Project="Serenity"
                        imageUrl="./Serinity.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                    <SmallProject
                        to="/E-portfolio-2025/work/Abercombie_V2"
                        Branding="Branding"
                        Project="Abercrombie V2"
                        imageUrl="./Abercrombie.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />


                    <SmallProject
                        to="/E-portfolio-2025/work/Abercombie_V2"
                        Branding="Branding"
                        Project="Okane"
                        imageUrl="./Okane.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                </ThreeProj>

                <BigProject
                    to="/E-portfolio-2025/work/Vanilla"
                    Branding="Branding"
                    Project="Vanilla"
                    imageUrl="./image copy 2.png"
                    TL="10/2024"
                    DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                />

            </div>









        </>


    )

}
