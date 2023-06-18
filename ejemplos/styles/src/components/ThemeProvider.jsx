import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react'
import { useMemo, useState, createContext, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext(null)

const themeBreakpoints = {
  values: {
    sm: 600,
    md: 960,
    lg: 1280
  },
  up(md) {
    const value = this.values[md] || md
    return `@media (min-width: ${value}px)`
  },
  down(md) {
    const value = this.values[md] || md
    return `@media (max-width: ${value - 1}px)`
  }
}

const lightTheme = {
  primary: 'hotpink',
  text: 'black',
  background: 'white',
}

const darkTheme = {
  primary: 'blue',
  text: 'white',
  background: 'black'
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const selectedTheme = useMemo(() => {
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    return {
      ...currentTheme,
      breakpoint: themeBreakpoints
    }
  }, [theme])

  const toggleTheme =() => {
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }

  return (
        <ThemeContext.Provider value={{toggleTheme, mode: theme, theme: selectedTheme }}>
            <ThemeProviderEmotion theme={selectedTheme}>
                    {children}
            </ThemeProviderEmotion>
        </ThemeContext.Provider>
  )
}

export default ThemeProvider

export function useTheme() {
    return useContext(ThemeContext)
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}