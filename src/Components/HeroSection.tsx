import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'
import desktop1 from '../assets/Desktop-1.webp'
export const HeroSection = () => {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.only('xs'))
    return (
        <>
            <ParallaxLayer
                speed={0.2}
                offset={0}
                style={{
                    opacity: 0.8,
                    backgroundImage: desktop1 ? `url(${desktop1})` : '',
                    backgroundSize: 'cover',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                }}
            >
                <ParallaxLayer speed={0.2} offset={0}>
                    <Grid
                        container
                        display="flex"
                        alignItems="center"
                        justifyContent={'center'}
                        flexDirection="row"
                        sx={{ mt: { sm: 30, xs: 20 } }}
                    >
                        <Grid item xs={12} md={2}>
                            <TipsAndUpdatesOutlinedIcon
                                sx={{
                                    width: 300,
                                    height: 300,
                                    color: '#fff',
                                    opacity: 0.5,
                                    ml: { xs: 8, sm: 60, md: 25 },
                                    // animation:
                                    animation: 'blinking 10s infinite',
                                    '@keyframes blinking': {
                                        '0%, 100%': {
                                            color: '#fff',
                                        },
                                        '25%': {
                                            color: 'transparent',
                                        },
                                        '50%': {
                                            color: '#fff',
                                        },
                                        '75%': {
                                            color: 'transparent',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                mr: { xs: 2, sm: 4, md: 0 },
                            }}
                        >
                            <Typography
                                fontWeight={'300'}
                                variant={!isXs ? 'h1' : 'h2'}
                                color="#333333"
                            >
                                WE MAKE
                            </Typography>
                            <Typography
                                fontWeight={'300'}
                                variant={!isXs ? 'h1' : 'h2'}
                                color="#333333"
                            >
                                DIGITAL
                            </Typography>
                            <style>
                                {`
                                @keyframes letterAnimation {
                                     0% {
                                        transform: translateY(0);
                                        }
                                     100% {
                                        transform: translateY(-0.1em);
                                        }
                                    }
                                `}
                            </style>
                            <Typography
                                fontWeight={'300'}
                                variant={!isXs ? 'h1' : 'h2'}
                                color="#333333"
                                sx={{
                                    textTransform: 'uppercase',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {'BRILLIANCE'.split('').map((letter, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            display: 'inline-block',
                                            transformOrigin: 'top center',
                                            animationName: 'letterAnimation',
                                            animationDuration: '2s',
                                            animationTimingFunction:
                                                'ease-in-out',
                                            animationIterationCount: 'infinite',
                                            animationDirection: 'alternate',
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                </ParallaxLayer>
            </ParallaxLayer>
        </>
    )
}
