import React,{useState} from 'react'

const Login = () => {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setUserData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input type="name" value={userData.name} name="name" onChange={handleChange} placeholder='Enter the Name'/>
            <br/><br/>
            <label>Email :</label>
            <input type="email" value={userData.email} name="email" onChange={handleChange} placeholder='Enter the Email'/>
            <br/><br/>
            <label>password:</label>
            <input type="password" value={userData.password} name="password" onChange={handleChange} placeholder='Enter the password'/>
            <br/><br/>
            <button type="submit"> Login </button>
        </form>
    </div>
  )
}

export default Login