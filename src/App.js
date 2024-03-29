import Layout from './components/Layout/Layout'
import './App.css'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'


function App() {
  return (
    <div className='App'>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  )
}

export default App
