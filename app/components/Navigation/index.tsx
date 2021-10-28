import { PageLink } from 'commons/types';

interface Props {
  pages: ReadonlyArray<PageLink>
}

function Navigation({pages}: Props) {
  return (
    <div className="nav-scroller py-1 mb-5">
      <nav className="nav d-flex justify-content-center">
        { pages.map(props => <NavItem key={props.id} {...props} />) }
      </nav>
    </div>
  )
}

function NavItem({title, slug}: PageLink) {
  return <a href={slug} className="p-2 link-secondary">{title}</a>
}

export {Navigation}