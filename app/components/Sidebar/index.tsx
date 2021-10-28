import { Page, Social } from 'commons/types';

interface Props {
  about?: Page
  socials: readonly Social[]
}

function Sidebar({about, socials}: Props) {
  return (
    <div className="position-sticky" style={{top: '2rm'}}>
      { about && 
      (
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="fst-italic">{about.title}</h4>
          <p className="mb-1">{about.subtitle}</p>
        </div>
      )
      }

      <div className="p-4">
        <h4 className="fst-italic">Socials</h4>
        <ol className="list-unstyled">
          {socials.map(({title, url}) => <li key={url}><a href={url}>{title}</a></li>)}
        </ol>
      </div>
    </div>
  )
}

export {Sidebar}