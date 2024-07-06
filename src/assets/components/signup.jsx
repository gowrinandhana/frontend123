import { useState } from "react";
import NavBar from "./navbar";

function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  function handleSignup(event) {
    event.preventDefault();
    // Implement your signup logic here
  }

  function handleLogin() {
    // Implement your login logic here
  }

  return (
    <>
      <NavBar />
      <div style={{
        backgroundColor: 'white',
        alignItems: 'center',
        boxShadow: '0 0 100px rgba(0, 0, 0, 0.1)',
        width: '300px', 
        padding: '40px',
        height: 'auto',
        justifyContent: 'center',
        display: 'flex',
        margin: '50px auto'
      }}>
        <div style={{
          padding: '20px',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: '10px',
            textAlign: 'center',
            marginBottom: '30px',
            marginTop:'5px'
          }}>
            Signup
          </h1>
          <form onSubmit={handleSignup} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            alignItems: 'center'
          }}>
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <label htmlFor="username" style={{ color: 'black', marginRight: '10px' }}>Username</label>
              <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Enter the username" size={30} style={{ padding: '5px' }} />
            </div>

            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <label htmlFor="email" style={{ color: 'black', marginRight: '10px' }}>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter the email" className="form-control rounded-0" size={30} required style={{ padding: '5px' }} />
            </div>

            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <label htmlFor="password" style={{ color: 'black', marginRight: '10px' }}>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password" className="form-control rounded-0" size={30} required style={{ padding: '5px' }} />
            </div>

            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <label htmlFor="rePassword" style={{ color: 'black', marginRight: '10px' }}>Re-enter Password</label>
              <input type="password" onChange={(e) => setRePassword(e.target.value)} placeholder="Re-enter the password" size={30} required style={{ padding: '5px' }} />
            </div>

            <button type="submit" style={{
              width: '100%',
              color: 'white',
              padding: '10px',
              backgroundColor: '#4CAF50',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              marginBottom: '10px'
            }}>
              Signup
            </button>

            <button type="button" onClick={handleLogin} style={{
              width: '100%',
              color: 'black',
              padding: '10px',
              backgroundColor: 'rgb(212, 217, 220)',
              border: 'gray',
              cursor: 'pointer',
              borderRadius: '4px',
              boxShadow: '0 0 200px rgba(0, 0, 0, 0.1)'
            }}>
              Login
            </button>
          </form>
          
          
        </div>
      </div>
    </>
  );
}

export default Signup;
