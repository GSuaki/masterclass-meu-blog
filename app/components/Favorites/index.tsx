import { Subject } from 'commons/types';

interface Props {
  favorites: readonly Subject[]
}

function Favorites({favorites}: Props) {
  return (
    <section className="subjects-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <p>Vamos conversar?</p>
          <h2>meus temas favoritos</h2>
        </div>
        <div className="row clearfix">
          {favorites.map(props => <FavoriteItem key={props.title} {...props}/> )}
        </div>
      </div>
    </section>
  )
}

function FavoriteItem({icon, title, subtitle}: Subject) {
  return ( 
    <div className="col-lg-4 col-md-6 col-sm-12 subjects-block">
      <div className="subjects-block-one fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInLeft'}}>
        <div className="inner-box layout_1">
          <div className="icon-box">
            <i className={icon}></i>
          </div>
          <h3>
            <a href={`/tags/${title}`}>{title}</a>
          </h3>
          <p>{subtitle}</p>
        </div>  
      </div>
    </div>
  )
}

export {Favorites}