import { Grid, Typography } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

export const Projects = () => {

    const cards = [
        { title: 'React Spring Animation App', image: 'https://firebasestorage.googleapis.com/v0/b/ptotts-shop.appspot.com/o/leroy-jetson.png?alt=media&token=d90ce2b6-3a60-49e2-8744-514b9297ad95', footer: <Link to="https://ptotts-shop.web.app/home">https://ptotts-shop.web.app/home</Link> },
        { title: 'Basic E-Commerce Shop', image: 'https://butalanding.web.app/assets/buta_box.1b5e76e4.png', footer: <Link to="https://butalanding.web.app/">https://butalanding.web.app/</Link> },
        { title: 'Simple Schedueler (First ever Project)', image: 'data:image/png;base64,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', footer: <Link to="https://arbeitstage-c2f4b.web.app/">https://arbeitstage-c2f4b.web.app/</Link> },
    ]
    
    return (
        <>
            <ParallaxLayer
                speed={0.2}
                offset={2}
                style={{
                    opacity: 0.8,
                    backgroundSize: 'cover',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                    background: 'radial-gradient(circle,#708090 , #333333)',
                }}
            >
                <ParallaxLayer speed={0.5} offset={0.99}>
                    <Grid
                        container
                        display="flex"
                        alignItems="center"
                        justifyContent={'center'}
                        flexDirection="row"
                        sx={{ mt: { sm: 30, xs: 20 } }}
                    >
                        <Typography variant="h2"
                                        color="#333333"
                                        sx={{ mt: 30, mb:2 }}>My Projects</Typography>
                       <Grid container spacing={3} justifyContent="center" sx={{mr:4, ml:4}}>
        {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{backgroundColor:"transparent"}}>
                    <CardHeader title={card.title} />
                    <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt={card.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {card.footer}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
                    </Grid>
                </ParallaxLayer>
            </ParallaxLayer>
        </>
    )
}
