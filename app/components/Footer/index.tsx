import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles['blog-footer']}>
      <p>Blog por GSuaki</p>
      <p>
        <a href="#">Voltar ao topo</a>
      </p>
    </footer>
  )
}

export {Footer}