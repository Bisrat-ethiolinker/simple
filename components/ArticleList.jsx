import ArticleItem from "./ArticleItem"
// import styles from  "../styles/Home.module.css"
const ArticleList = ({articles}) => {
  return (
    <div>
        {
    articles.map((article, k) => <ArticleItem key={k} article={article} />)
    
    }
    </div>
  )
}

export default ArticleList