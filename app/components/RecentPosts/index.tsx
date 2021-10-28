import { Post } from 'commons/types';

interface Props {
  posts: ReadonlyArray<Post>
}

function RecentPosts({posts}: Props) {
  return (
    <section className="posts-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <p>POSTAGENS RECENTES</p>
        </div>
        <div className="row clearfix">
          {posts.map(props => <PostCard key={props.slug} {...props}/> )}
        </div>
      </div>
    </section>
  )
}

function PostCard({author, content, coverImage, publishedAt, slug, tags, title}: Post) {
  const articlePath = `/blog/${slug}`
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 post-block">
      <div className="posts-block-one fadeInUp animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
        <div className="inner-box">
          <div className="image-holder">
            <figure className="image-box">
              <img src={coverImage.url} alt={slug} />
            </figure>
            <div className="post-date">
              <i className="fas fa-calendar-alt"></i>
              <p>{publishedAt.substring(5, 10)}</p>
            </div>
            <div className="link">
              <a href={articlePath}>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="lower-content">
            <ul className="post-info">
              <li><strong className="d-inline-block mb-2 text-primary">{tags.join(', ')}</strong></li>
            </ul>
            <ul className="post-info">
              <li>
                <span>Por</span>&nbsp;
                <a href={articlePath}>{author.title}</a>
              </li>
            </ul>
            <h3>
              <a href={articlePath}>{title}</a>
            </h3>
            <div className="text">
              <p>{content.text?.substring(0, 100)}[...]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {RecentPosts}