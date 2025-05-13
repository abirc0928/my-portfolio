import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Skill from "./components/Skill"
import Work from "./components/Work"

function App() {


  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skill></Skill>
        <Work></Work>
        <Review></Review>
      </main>
    </>
  )
}

export default App
