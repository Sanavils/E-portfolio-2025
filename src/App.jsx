import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Abercrombie from './pages/Abercrombie'
import Scentify from './pages/Scentify'

import styled from 'styled-components'

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
  // ✅ chemins robustes (local + GitHub Pages)
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const viteIcon = `${import.meta.env.BASE_URL}vite.svg`;

  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
