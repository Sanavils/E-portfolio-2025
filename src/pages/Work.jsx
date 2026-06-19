import React, { useEffect } from 'react'
import styled from 'styled-components'
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

export default function Work() {

    useEffect(() => {
        // Stagger project cards when entering viewport
        gsap.fromTo('.zonning > div > a, .zonning > a',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.zonning',
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
            <div className='zonning'>

                <h1 className="Title">ALL<span className="CAPS-Small-text">[12]</span></h1>

                <TwoProj>
                    <MidProject
                        to="/work/abercrombie"
                        Branding="Branding"
                        Project="Abercrombie"
                        imageUrl="./Abercrombie-v2.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                    <MidProject
                        to="/work/Scentify"
                        Branding="Branding"
                        Project="Scentify"
                        imageUrl="./Scientify.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                </TwoProj>

                <ThreeProj>
                    <SmallProject
                        to="/work/Serenity"
                        Branding="Branding"
                        Project="Serenity"
                        imageUrl="./Serinity.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                    <SmallProject
                        to="/work/abercombie_V2"
                        Branding="Branding"
                        Project="Abercrombie V2"
                        imageUrl="./Abercrombie.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />


                    <SmallProject
                        to="/work/Okane"
                        Branding="Branding"
                        Project="Okane"
                        imageUrl="./Okane.png"
                        TL="10/2024"
                        DescriptionText="A modern redesign of the logo and visual identity to appeal to a younger generation while maintaining the brand’s iconic essence."
                    />

                </ThreeProj>

                <BigProject
                    to="/work/Vanilla"
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
