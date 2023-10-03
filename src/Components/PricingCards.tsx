import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import StarIcon from '@mui/icons-material/StarBorder'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { CTADialog } from './CTADialog'
import { CaTiers } from '../typing/types'

export interface TiersProps {
    title: string
    price: string
    subHeader: string
    description: string
    contactType: string
}

export const PricingCards = ({ tiers }: { tiers: CaTiers[] }) => {
    return (
        tiers && (
            <Container disableGutters maxWidth="md" component="main">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="white"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    opacity: 0.8,
                                    backgroundColor: '#333333',
                                    boxShadow:
                                        '0px 0px 20px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subHeader}
                                    titleTypographyProps={{
                                        align: 'center',
                                        color: 'white',
                                    }}
                                    action={
                                        tier.title === 'Pro' ? (
                                            <StarIcon />
                                        ) : null
                                    }
                                    subheaderTypographyProps={{
                                        align: 'center',
                                        color: 'white',
                                    }}
                                    sx={{
                                        backgroundColor: '#2a3439',
                                        width: '100%',
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="text.primary"
                                        >
                                            {tier.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            €
                                        </Typography>
                                    </Box>
                                    <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                        color="white"
                                    >
                                        {tier.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <CTADialog />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    )
}
