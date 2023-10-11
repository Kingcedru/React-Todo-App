import { useState } from 'react'
import CreateNote from './components/createNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <CreateNote/>
    </div>
  )
}

export default App
