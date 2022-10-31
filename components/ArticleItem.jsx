import { Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import Link from "next/link"
import styles from "../styles/Home.module.css"

const ArticleItem = ({article}) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`} >
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
        <Link href='/article/[id]' as={`/article/${article.id}`} >
        <CardActions>
          <Button>View more</Button>
        </CardActions>
        </Link>
      </Card>
      </Box>
      </Link>
  )
}

export default ArticleItem