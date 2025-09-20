import Card from './components/Card'
import './App.css'
import './scss/styles.scss'

const card1 = {
  img: 'test.png',
  title: "Card title",
  text:"Some quick example text to build on the card title and make up the bulk of the card's content",
}
const card2 = {
  title:"Special title treatment",
  text:"With supporting text below as a natural lead-in to additional content"
}

function App() {
  return (
    <>
    <Card title={card1.title} img={card1.img}>
      {card1.text}
    </Card>
     <Card title={card2.title}>
      {card2.text}
    </Card>
    </>
  )
}

export default App
