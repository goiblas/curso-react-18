import { useState } from 'react'
import Dialog from './components/Dialog'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='card'>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <h1>Dialog Title</h1>
        <p>Dialog content</p>
      </Dialog>
    </div>
  )
}

export default App
