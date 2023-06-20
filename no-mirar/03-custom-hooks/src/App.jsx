import useMediaQuery from './hooks/useMediaQuery'
import usePosts from './hooks/usePost'

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const {isLoading, posts, error } = usePosts()
  
  console.log(isLoading, posts, error)

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
