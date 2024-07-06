import { useState } from "react";
import NavBar from "./navbar";

function Login() {
  let [userName, setUserName] = useState('')
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [rePassword, setRePassword] = useState('');
   let [result, setResult] = useState('');
   
  function handleLogin() {
        setResult({userName, email, password, rePassword})
  }


  return (
    <>
    <NavBar/>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      color:'white',
      
    }}>
      <div style={{
        width: '500px',
        maxWidth: '28rem',
        padding: '2rem',
        backgroundColor: 'black',
        borderRadius: '20px',
        boxShadow: '0 10px 150px rgba(0, 0, 0, 0.1)',
        marginTop:'100px',
        marginBottom:'100px'
      }}>
        <div style={{
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 'italic',
          }}>Login</h1>
          <p style={{
            color: '#6b7280',
          }}>Enter your details</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="username" style={{
              display: 'block',
              marginBottom: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
            }}>Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value) }
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                outline: 'none',
                boxShadow: '0 0 0 2px transparent',
                transition: 'box-shadow 0.2s',
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3b82f6'}
              onBlur={(e) => e.target.style.boxShadow = '0 0 0 2px transparent'}
            />
          </div>
          <div>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              
            }}>Email</label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value) }

              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                outline: 'none',
                boxShadow: '0 0 0 2px transparent',
                transition: 'box-shadow 0.2s',
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3b82f6'}
              onBlur={(e) => e.target.style.boxShadow = '0 0 0 2px transparent'}
            />
          </div>
          <div>
            <label htmlFor="password" style={{
              display: 'block',
              marginBottom: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
            }}>Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value) }

              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                outline: 'none',
                boxShadow: '0 0 0 2px transparent',
                transition: 'box-shadow 0.2s',
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3b82f6'}
              onBlur={(e) => e.target.style.boxShadow = '0 0 0 2px transparent'}
            />
          </div>
          <div>
            <label htmlFor="re-password" style={{
              display: 'block',
              marginBottom: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
            }}>Reenter Password</label>
            <input
              id="re-password"
              type="password"
              onChange={(e) => setRePassword(e.target.value) }
              placeholder="Re-enter your password"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                outline: 'none',
                boxShadow: '0 0 0 2px transparent',
                transition: 'box-shadow 0.2s',
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3b82f6'}
              onBlur={(e) => e.target.style.boxShadow = '0 0 0 2px transparent'}
            />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <button style={{
              padding: '0.5rem 1rem',
              fontWeight: '500',
              color: 'white',
              backgroundColor: '#3b82f6',
              borderRadius: '0.375rem',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onClick={handleLogin}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3b82f6'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
            >
              Sign Up
            </button>
            <button style={{
              padding: '0.5rem 1rem',
              fontWeight: '500',
              color: '#3b82f6',
              backgroundColor: 'transparent',
              border: '1px solid #3b82f6',
              borderRadius: '0.375rem',
              outline: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#3b82f6';
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3b82f6'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
            >
              Create Account
            </button>
          </div>
          <p>your username is:{result.userName}</p>
          <p>your email is:{result.email}</p>
          <p>your password is:{result.password}</p>
          <p>your repassword is:{result.rePassword}</p>

        </div>
      </div>
    </div>
    </>
  );
};

export default Login ;
