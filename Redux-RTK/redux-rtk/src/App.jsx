import './App.css'
import Counter from './app/features/counter/Counter'

function App() {
  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

 return (
    <>
   <div style={containerStyle} >
   <h1 style={titleStyle}>Redux Toolkit Counter </h1>  
   <Counter /> 
   </div>
    
        
      </>
  )
}

export default App
