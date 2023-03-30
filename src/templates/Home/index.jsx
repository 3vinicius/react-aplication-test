import { useEffect, useState, useCallback } from "react";

import "./styles.css";


import { loadPosts } from "../../utils/load-posts/load-posts";
import { Posts } from "../../components/Posts/index";
import { Button } from '../../components/Button';
import { TextImput } from '../../components/TextImput';

export const Home = () => {
  
  /* state = {
    post:[],
    allPosts: [],
    page: 0,
    postsPerPage:2,
    searchValue:"",
  }; */

  /* This is seted Usetate */
  const [post, setPost] = useState([]); 
  const [allPosts,setAllPosts] = useState([]);
  const [page,setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue,setSearchValue] = useState("")


  const maxPage = post.length >= 99


  /* This is my functions */
  const filterPosts = !!searchValue ? 
      post.filter(post=>{
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      }) 
      : post;


    
    

    const handleLoadPosts = useCallback( async(page,postsPerPage) => {
        
        const postsAndPhotos = await loadPosts()
        setPost(postsAndPhotos.slice(page,postsPerPage))
        setAllPosts(postsAndPhotos)

      },[])
      

      useEffect(() => {
        handleLoadPosts(0,postsPerPage)
      },[handleLoadPosts,postsPerPage])


    const loadMorePosts = () =>{
        const nextPage = page + postsPerPage;
        const nextNewPages = allPosts.slice(nextPage,nextPage+postsPerPage)
        post.push(...nextNewPages);
        setPost(post);
        setPage(nextPage)
      } 
  
    const handleChange = (e)=>{
        const {value} = e.target
        setSearchValue(value)
        
      }


  /* Method retunr with components  */
  return(
    <section className='container'>
      <div className="search-container">
      {!!searchValue && 
        <>
        <h1>Search Value: {searchValue}</h1>
        </>
      }
      
      <TextImput 
      searchValue={searchValue}
      handleChange={handleChange}
      />
      </div>
      {filterPosts.length > 0 && <Posts post={filterPosts} />} 
      {filterPosts.length === 0 && <p>Não existem posts com {searchValue}</p>}
      

      {!searchValue && (
        <Button disabled={maxPage} onClick={loadMorePosts}/>
      )}
      
    </section>
    
  );
} 

/* export class Home extends Component {
  state = {
    post:[],
    allPosts: [],
    page: 0,
    postsPerPage:2,
    searchValue:"",
  };

    componentDidMount(){
      this.loadPosts()
    }

    async loadPosts() {
      const{
        page,postsPerPage
      } = this.state
      const postsAndPhotos = await loadPosts()
      this.setState({
        post: postsAndPhotos.slice(page,postsPerPage),
        allPosts: postsAndPhotos
      });
    }
    
    loadMorePosts = () =>{
    const {
        page,
        postsPerPage,
        allPosts,
        post
      } = this.state

      const nextPage = page + postsPerPage;
      const nextNewPages = allPosts.slice(nextPage,nextPage+postsPerPage)
      post.push(...nextNewPages);
      this.setState({post:post,page:nextPage})
    } 

    handleChange = (e)=>{
      
      const {value} = e.target
      this.setState({searchValue:value})
      
    }

    render(){
      const {post,searchValue} = this.state;
      const maxPage = post.length >= 99

      const filterPosts = !!searchValue ? 
      post.filter(post=>{
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      }) 
      : 
      post
      return(
        <section className='container'>
          <div className="search-container">
          {!!searchValue && 
            <>
            <h1>Search Value: {searchValue}</h1>
            </>
          }
          
          <TextImput 
          searchValue={searchValue}
          handleChange={this.handleChange}
          />
          </div>
          {filterPosts.length > 0 && <Posts post={filterPosts} />} 
          {filterPosts.length === 0 && <p>Não existem posts com {searchValue}</p>}
          

          {!searchValue && (
            <Button disabled={maxPage} onClick={this.loadMorePosts}/>
          )}
          
        </section>
        
      );
    }
} 
 */
/* 
  /* This is form is necessary used bind from reference this global 
  handlePclick = ()=>{
    if(this.state.valueN%2 == 1){
      this.setState({name: 'Vinicius'})
    } else this.setState({name: 'Amorim'})
    
  }


 This is from for used this global, using arrow function
  forAlink = (event)=>{
    event.preventDefault();
    this.setState({valueN: this.state.valueN + 1})
    
    
  }



  render() {
    const { name } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img  className="App-logo" alt="logo" />
          <p onClick={this.handlePclick}>
            Olá Sr. {name} .
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer"
            onClick={this.forAlink}
          >
            {this.state.valueN}
          </a>
          <p>agora</p>
          <div>peganddo</div>
          <p>novo</p>
          <p>deu trabalho</p>
          <p>pois e foi</p>
        </header>
      </div>
    );
  }
} */



/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          Learn Refact nowdg
        </a>
        <p>agora</p>
        <div>peganddo</div>
        <p>novo</p>
        <p>deu trabalho</p>
        <p>pois e foi</p>
      </header>
    </div>
  );
} */


