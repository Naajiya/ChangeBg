import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setBg] = useState('red')

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return ( 
    <>
      <div className='d-flex align-items-center justify-content-center' >
        <button onClick={() => setBg('blue')} className='btnstyle m-3' style={{ margin: '1%' }}>Blue</button>
        <button onClick={() => setBg('brown')} className='btnstyle m-3' style={{ margin: '1%' }}>Brown</button>

        <button onClick={() => setBg('violet')} className='btnstyle m-3' style={{ margin: '1%' }}>Pink</button>
      </div>
    </>
  )
}

export default App
