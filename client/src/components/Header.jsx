import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-blue-200 h-[55px] w-full flexBetween px-16'>
        <h1 className='font-bold text-xl'>JonasDev</h1>
        <nav className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="Register">Register</Link>
        <Link to="Login">Login</Link>

        </nav>
    </div>
  )
}

export default Header