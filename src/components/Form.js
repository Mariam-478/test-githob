import React, { useState } from 'react'
import "./Header.css"

const Form = (props) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")

    function emailValue(e){
        setEmail(e.target.value)
    }
    function passValue(e){
        setPass(e.target.value)
    }
    function nameValue(e){
        setName(e.target.value)
    }


    
    function addData(e){
        e.preventDefault()

        const obj = {
            name: name,
            email: email,
            pass: pass
        }
        props.onGetTextHello(obj)
    }
  return (
    <form>
      <label htmlFor="">Email</label>
      <input onChange={emailValue} type="text" />
      <label htmlFor="">Password</label>
      <input onChange={passValue} type="password" />
      <label htmlFor="">Name</label>
      <input onChange={nameValue} type="text" />
      <button onClick={addData}>ADD</button>
    </form>
  )
}

export default Form

