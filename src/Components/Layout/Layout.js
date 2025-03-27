import { Navbar, HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection, Footer } from '../'

const Layout = () => {
  return (
    <>
      <div className='bg'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer/>
      </div>
    </>
  )
};

export default Layout;