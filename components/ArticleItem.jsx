import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useRouter } from "next/router"
// import Link from "next/link"
// import styles from "../styles/Home.module.css"

const ArticleItem = ({article}) => {
  const router = useRouter()
  return (
    // <Link href='/article/[id]' as={`/article/${article.id}`} >
    <Box component="span"
    sx={{ display: 'inline-block',  width: 390, mx: '2px', transform: 'scale(0.8)' }} >
      <Card sx={{height: 280}}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {article.body}
        </Typography>
        </CardContent>
        
        <CardActions>
        
          <Button onClick={() => router.push('/article/[id]', `/article/${article.id}`)}>View more</Button>
          
        </CardActions>
        
      </Card>
      </Box>
      // </Link>
  )
}

export default ArticleItem