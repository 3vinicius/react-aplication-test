import './styles.css';


export const PostCard = ({key,cover,title,body}) =>{
  return(
  <div key={key} className="post">
              <img src={cover} alt={title} />
            <div className="post-content">
              <h1>{title}</h1> 
              <p>{body}</p>
            </div>
            </div>
  )
}