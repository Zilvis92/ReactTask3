import Navbar from './components/Navbar';
import Header from './components/Header';
import Paslaugos from './components/Paslaugos';
import ApieMus from './components/ApieMus';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Paslaugos />
      <ApieMus />
      <Footer />
    </div>
  )
}

export default App
