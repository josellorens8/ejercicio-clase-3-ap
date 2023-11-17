import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Producto from './components/Producto'
import data from './data/data'

function App() {

  console.log(data[0])
  return (
    <>
    <Header />
    <main>
      <Producto 
      {...data[0]}/>
    </main>
    <Footer />
    </>
  )
}

export default App
