import React, { useRef } from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { SEOHead } from '../Utils/Head'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { CTADialog } from '../Components/CTADialog'
import desktop4 from '../assets/Desktop-4.webp'
import desktop3 from '../assets/Desktop-3.webp'
import desktop2 from '../assets/Desktop-2.webp'
import { HeroSection } from '../Components/HeroSection'

export const AboutUs = () => {
    const containerRef = React.useRef<HTMLDivElement>(null!)
    const slideRef = useRef<IParallax>(null!)

    return (
        <>
            <SEOHead
                title={'Über uns'}
                description={'wir brauchen kohle'}
                rel={'canonical'}
                href={'/landing'}
            />
            <div ref={containerRef}>
                <Parallax
                    pages={4}
                    ref={slideRef}
                    style={{
                        top: '0',
                        left: '0',
                        backgroundSize: 'cover',
                        background: 'radial-gradient(circle,#708090 , #333333)',
                    }}
                >
                    <HeroSection />
                    <ParallaxLayer
                        speed={0.2}
                        offset={1}
                        style={{
                            backgroundImage: desktop2 ? `url(${desktop2})` : '',
                            backgroundSize: 'cover',
                            opacity: 0.5,
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <ParallaxLayer speed={0.5} offset={0.5}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        color="#333333"
                                        sx={{ mt: 30 }}
                                    >
                                        Our Mission
                                    </Typography>
                                    <Typography
                                        color="#333333"
                                        variant="h5"
                                        align="center"
                                        sx={{
                                            mr: { xs: 0, sm: 20, md: 50 },
                                            ml: { xs: 0, sm: 20, md: 50 },
                                        }}
                                    >
                                        <b>Our mission is clear:</b> to provide
                                        top-notch digital products and services
                                        that help you thrive in the digital
                                        landscape. Whether you're a startup
                                        looking to establish your online
                                        presence, an established business
                                        seeking to upgrade your web platform, or
                                        an entrepreneur with a groundbreaking
                                        idea, we're here to turn your vision
                                        into reality.
                                    </Typography>
                                    <Divider
                                        sx={{
                                            mt: 10,
                                            width: '30%',
                                            borderColor: 'white',
                                        }}
                                    />
                                </Box>
                            </ParallaxLayer>
                        </Grid>
                    </ParallaxLayer>
                    <ParallaxLayer
                        speed={0.2}
                        offset={2}
                        style={{
                            backgroundImage: desktop3 ? `url(${desktop3})` : '',
                            backgroundSize: 'cover',
                            opacity: 0.5,
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <ParallaxLayer speed={0.5} offset={0.99}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        sx={{ mt: 30 }}
                                    >
                                        Why Us
                                    </Typography>
                                    <Typography
                                        color="white"
                                        variant="h5"
                                        align="center"
                                        sx={{
                                            mr: { xs: 0, sm: 20, md: 50 },
                                            ml: { xs: 0, sm: 20, md: 50 },
                                        }}
                                    >
                                        <b>Expertise:</b> Industry experts
                                        committed to staying at the forefront of
                                        technology.
                                        <br />
                                        <b>Personalized:</b> Tailoring solutions
                                        to your specific requirements.
                                        <br />
                                        <b>Quality:</b> Rigorous quality
                                        assurance for flawless results.
                                        <br />
                                    </Typography>
                                    <Divider
                                        sx={{
                                            mt: 10,
                                            width: '30%',
                                            borderColor: 'white',
                                        }}
                                    />
                                </Box>
                            </ParallaxLayer>
                        </Grid>
                    </ParallaxLayer>
                    <ParallaxLayer
                        speed={0.2}
                        offset={3}
                        style={{
                            backgroundImage: desktop4 ? `url(${desktop4})` : '',
                            backgroundSize: 'cover',
                            opacity: 0.5,
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <ParallaxLayer speed={0.5} offset={1}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        align="center"
                                        sx={{ mt: 30 }}
                                    >
                                        Let's Collaborate
                                    </Typography>
                                    <Typography
                                        color="white"
                                        variant="h5"
                                        align="center"
                                        sx={{
                                            mr: { xs: 0, sm: 20, md: 50 },
                                            ml: { xs: 0, sm: 20, md: 50 },
                                        }}
                                    >
                                        Elevate your digital presence with us.
                                        Contact us today to bring your vision to
                                        life!
                                    </Typography>
                                    <CTADialog sx={{ mt: 2 }} />
                                    <Divider
                                        sx={{
                                            mt: 5,
                                            width: '30%',
                                            borderColor: 'white',
                                        }}
                                    />
                                </Box>
                            </ParallaxLayer>
                        </Grid>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    )
}
