import Link from 'next/link'
import { Post } from 'commons/types'

interface Props {
  posts: ReadonlyArray<Post>
}

function Posts({posts}: Props) {
  return (
    <div className="blog-content">
      { posts.map(props => <PostCard key={props.slug} {...props} />) }
    </div>
  )
}

function PostCard({author, content, coverImage, publishedAt, slug, tags, title}: Post) {
  const articlePath = `/blog/${slug}`
  return (
    <div className="posts-block-one fadeInUp animated">
      <div className="post type-post status-published format-standard has-post-thumbnail">
        <div className="inner-box">
          <div className="image-holder">
            <figure className="image-box">
              <Link href={articlePath}>
                <a className="post-thumbnail" href={articlePath}>
                  <img width="820" height="312" src={coverImage.url} alt={title} />
                </a>
              </Link>
            </figure>
            <div className="post-date">
              <i className="fas fa-calendar-alt"></i>
              <p>
                <time className="entry-date published">{publishedAt.substring(5, 10)}</time>
              </p>
            </div>
          </div>
          <div className="lower-content">
            <ul className="post-info">
              <li>
                <strong className="d-inline-block mb-2 text-primary">{tags.join(', ')}</strong>
              </li>
            </ul>
            <ul className="post-info">
              <li>
                <span>Por</span>&nbsp;
                <Link href={articlePath}>
                  <a href={articlePath}>{author.name}</a>
                </Link>
              </li>
            </ul>
            <h3 className="entry-title">{title}</h3>
            <div className="text">
              <p>{content.text?.substring(0, 200)}[...]</p>
            </div>
            <div className="read-more-link">
              <Link href={articlePath}>
                <a href={articlePath}>
                  <span>Leia mais </span>&nbsp;
                  <i className="fas fa-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Posts}