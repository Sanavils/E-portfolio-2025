import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Abercrombie from './pages/Abercrombie'
import Scentify from './pages/Scentify'
import Serenity from './pages/Serenity'
import Abercrombie_V2 from './pages/Abercombie_V2'
import Vanilla from './pages/Vanilla'
import Okane from './pages/Okane'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import ScrollToTop from './composants/ScrollToTop'
import CustomCursor from './composants/CustomCursor'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ✅ un vrai lien stylé basé sur Link (pas <a> dans <Link>)
const StyledLink = styled(Link)`
  text-align: center;
  font-family: "Neue Montreal";
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: normal;
  text-decoration: none;
`;

// ✅ texte non cliquable
const NavText = styled.span`
  text-align: center;
  font-family: "Neue Montreal";
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: normal;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 16px;
  }
`;

function App() {
  const location = useLocation()
  
  // ✅ chemins robustes (local + GitHub Pages)
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const viteIcon = `${import.meta.env.BASE_URL}vite.svg`;

  useEffect(() => {
    // Kill existing triggers
    ScrollTrigger.getAll().forEach(t => t.kill())

    // Animate new page elements after mount
    const ctx = gsap.context(() => {
      // 1. Page Title reveal
      gsap.fromTo('.Title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }
      )

      // 2. Line animations
      gsap.utils.toArray('.ligne, .ligne2').forEach((line) => {
        gsap.fromTo(line, 
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.4,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: line,
              start: 'top 92%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // 3. Overview reveals
      gsap.utils.toArray('.overview').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // 4. Figma iframe frame reveals
      gsap.utils.toArray('.iframe').forEach((iframe) => {
        gsap.fromTo(iframe,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: iframe,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    })

    return () => ctx.revert()
  }, [location.pathname])

  return (
    <ReactLenis root>
      <ScrollToTop />
      <CustomCursor />
      <NavBar>
        {/* Logo → home */}
        <StyledLink to="/">
          <img src={logoSrc} alt="Sanavils" height="90" />
        </StyledLink>

        {/* Exemple d’icône */}
        <StyledLink to="/">
          <img src={viteIcon} alt="Home" />
        </StyledLink>

        <div className="NavLinks" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <StyledLink to="/work">Work</StyledLink>
          <NavText>/</NavText>
          <StyledLink to="/about">About</StyledLink>
          <NavText>/</NavText>
          <StyledLink to="/mail">Mail</StyledLink>
        </div>
      </NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/abercrombie" element={<Abercrombie />} />
        <Route path="/work/Scentify" element={<Scentify />} />
        <Route path="/work/Serenity" element={<Serenity />} />
        <Route path="/work/abercombie_V2" element={<Abercrombie_V2 />} />
        <Route path="/work/Vanilla" element={<Vanilla />} />
        <Route path="/work/Okane" element={<Okane />} />

      </Routes>
    </ReactLenis>
  );
}

export default App;
