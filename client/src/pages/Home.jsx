import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetch('http://localhost:1616/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }, 100);
  }, [])
  return (
    <main>
      <div>
        <h1 className='text-4xl flexCenter h-[400px]'>Welcome back to Our App</h1>
      </div>
    </main>
  )
}

export default Home