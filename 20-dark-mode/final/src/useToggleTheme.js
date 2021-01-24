import { useEffect, useState } from 'react'

export const getStorageTheme = () => {
  let theme = 'light-theme'

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    theme = 'dark-theme'

  if (localStorage.getItem('theme'))
    theme = localStorage.getItem('theme')

  return theme
}

export const useToggleTheme = (initialValue) => {
  const [theme, setTheme] = useState(initialValue)
  const toggleTheme = () => {
    if (theme === 'light-theme')
      setTheme('dark-theme')
    else
      setTheme('light-theme')
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return toggleTheme
}

