import { useState } from 'react'
import Intro from './components/Intro'
import Header from './components/Header'
import IntroBragTextSection from './components/IntroBragTextSection'
import DynamicAbout from './components/DynamicAbout'
import './App.css'

function App() {

  return (
    // <Intro 
    //   portfolioIntroName={"Elanchezhiyan E"} 
    //   portfolioIntroQualifications={"MCA, BCA"}
    //   portfolioIntroDesc={"SDE proficient in NodeJS, Java, React, HTML/CSS and more..."}>
    // </Intro>
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
    </>
  )
}

export default App
