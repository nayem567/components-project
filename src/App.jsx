import './App.css';
import Card1 from './components/Card1_Functional';
import Card2 from './components/Card2_Class';


function App() {

  return (
      <div>
        {/* functional Component */}
        <Card1 name="Mohaymenul Islam" desc="Web Developer"/>
        
        {/* Class Component */}
        <Card2 name="A Class Component" desc="Little Complex than functional component"/>
      </div>
  )
}

export default App
