
import '../Login/login.css'

export const Login = () => {
  return (
    <>
      <div className='LoginContainer'>
        <div className='FormContainer'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>

    </>
  )
}
