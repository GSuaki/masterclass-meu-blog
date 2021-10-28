import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'

function Navbar() {
  const [displayed, setDisplayed] = useState(false)
  const [term, setTerm] = useState('')

  const handleNewsletterClick = () => {
    const email = prompt('Digite seu e-mail')
    alert(`Seja Bem-Vindo ${email}!`)
  }

  const handleSubmit = () => {
    Router.push(`/search?q=${term}`)
  }

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt1">
          <a href="#" className="link-secondary" onClick={handleNewsletterClick}>Newsletter</a>
        </div>
        <div className="col-4 text-center">
          <Link href="/">
            <a className="blog-header-logo text-dark" href="#">Meu TechBlog</a>
          </Link>
        </div>
        <div 
          className="col-4 d-flex justify-content-end align-items-center"
          onMouseLeave={() => setDisplayed(false)}
        >
          { displayed &&
            <input
              className="form-control"
              style={{ padding: 0 }}
              value={term}
              type="text"
              onChange={ev => setTerm(ev.target.value)}
              onKeyPress={ev => handleKeyPress(ev.key)}
            />
          }

          <a 
            href="#" 
            className="link-secondary mx-3" 
            onClick={handleSubmit}
            onMouseEnter={() => setDisplayed(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}

export {Navbar}