import useMediaQuery from './hooks/useMediaQuery'

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  if(isMobile) {
    return (
      <div className="app app--mobile">
        Mobile
      </div>
    )
  }
  return (
    <div className="app app--desktop">
      desktop
    </div>
  )
}

export default App
