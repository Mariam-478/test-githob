import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Product from './components/Product';

const data = [
  {
    name: "TEST",
    email: "uwyg@s",
    pass: "1234567"
  },
  {
    name: "TEST-2",
    email: "uwyg@s",
    pass: "1234567"
  },
  // {
  //   name: "Sadyr-2",
  //   email: "sadyr@g",
  //   pass: "1234567"
  // },
]

function App() {

  const [isForm, setIsForm] = useState(false)
  const [product, setProduct] = useState(data)

  function showForm(){
    setIsForm((prev)=>!prev)
  }

  function getTextHello(obj){
    setProduct((prev)=>{
      return [...prev,obj]
    })
    
  }
  console.log(data);
  
  return (
    <div className="App">
      <Header state={isForm} onShowForm={showForm}/>
      {!isForm && <Form onGetTextHello={getTextHello} />}

      {
        product.map((el)=>(
          <Product pass={el.pass} name={el.name} email={el.email} />
        ))
      }
    </div>
  );
}

export default App;



