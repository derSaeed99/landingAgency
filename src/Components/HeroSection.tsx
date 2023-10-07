import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import desktop1 from '../assets/Desktop-1.webp'
export const HeroSection = () => {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.only('xs'))
    const textToAnimate = 'BRILLIANCE'
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
                    >
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                mr: 4,
                                mt: 30,
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
                                {textToAnimate
                                    .split('')
                                    .map((letter, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                display: 'inline-block',
                                                transformOrigin: 'top center',
                                                animationName:
                                                    'letterAnimation',
                                                animationDuration: '1s',
                                                animationTimingFunction:
                                                    'linear',
                                                animationIterationCount:
                                                    'infinite',
                                                animationDirection: 'alternate',
                                                animationDelay: `${
                                                    index * 0.1
                                                }s`,
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
