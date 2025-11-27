
import Header from './components/Header'
import IntroBragTextSection from './components/IntroBragTextSection'
import DynamicAbout from './components/DynamicAbout'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import ContactMe from './components/ContactMe'
import './App.css'

function App() {
  

  return (
    <>
      <Header></Header>
      <IntroBragTextSection
        bragText={
          <>
            An aspiring SDE building <span className="redText">software</span> and <span className="redText">myself</span> with every project and experience.
          </>
        }
      ></IntroBragTextSection>
      <DynamicAbout></DynamicAbout>
      <TechStack></TechStack>
      <Projects></Projects>
      <Education></Education>
      <ContactMe email={`elanchezhiyan2440@gmail.com`}></ContactMe>
    </>
  )
}

export default App
