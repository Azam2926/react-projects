import React from 'react'
import data from './data'
import Article from './Article'
import { getStorageTheme, useToggleTheme } from './useToggleTheme'

function App () {

  const toggleTheme = useToggleTheme(getStorageTheme())

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
