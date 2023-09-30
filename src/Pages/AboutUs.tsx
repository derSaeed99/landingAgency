import React, { useRef } from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { SEOHead } from '../Utils/Head'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import backgroundImage from "../../src/assets/blueprint.svg"
import { CTADialog } from '../Components/CTADialog'

export const AboutUs = () => {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const slideRef = useRef<IParallax>(null!);

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
            top: "0",
            left: "0",
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "", 
          }}
        >
          <Grid container
            sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
            }}
          >
            <ParallaxLayer
              speed={0.2}
              offset={0}
              style={{
                background: "linear-gradient(to bottom, rgba(31, 35, 64, 0.8), #1F2340, rgba(31, 35, 64, 0.8))",
              }}
            >
              <Grid item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}>
                <ParallaxLayer speed={0.2} offset={0}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <Typography
                      sx={{ mt: 30 }}
                      variant="h2"
                      color="white"
                    >
                      About Us
                    </Typography>
                    <Typography
                      variant="h5"
                      color="white"
                      align="center"
                    >
                      <p style={{textAlign:"center"}}>
                      we're a tight-knit team passionate about digital innovation. <br />
                      <b>Websites:</b> Crafting stunning, high-performing websites. <br/>
                      <b>Web Apps:</b> Creating tailored web applications for your unique needs.<br/>
                      <b>MVPs:</b> Rapid MVP development for startups and entrepreneurs.<br/>
                      <b>SEO:</b> Boosting online visibility to drive organic traffic.<br />
                      </p>
                    </Typography>
                    <Divider
                      sx={{ mt: 10, width: "30%", borderColor: "white" }} />
                  </Box>
                </ParallaxLayer>
            </Grid>
            </ParallaxLayer>
            <ParallaxLayer speed={0.2} offset={1}
              style={{
                background: "linear-gradient(to bottom, rgba(184, 181, 255, 0.8), #B8B5FF, rgba(184, 181, 255, 0.8))",
              }}
            >
              <Grid item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <ParallaxLayer speed={0.5} offset={0.5}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection:"column"
                    }}>
                    <Typography
                      variant="h2"
                      color="white"
                      sx={{ mt: 30 }}
                    >
                      Our Mission
                    </Typography>
                    <Typography
                      color="white"
                      variant="h5"
                      align="center"
                      sx={{
                        mr: { xs: 0, sm: 20, md: 50 },
                        ml: { xs: 0, sm: 20, md: 50 }
                      }}
                    >
                      <b>Our mission is clear:</b> to provide top-notch digital products and services that help you thrive in the digital landscape. Whether you're a startup looking to establish your online presence, an established business seeking to upgrade your web platform, or an entrepreneur with a groundbreaking idea, we're here to turn your vision into reality.
                    </Typography>
                    <Divider
                      sx={{ mt: 10, width: "30%", borderColor: "white" }} />
                  </Box>
                  </ParallaxLayer>
              </Grid>
            </ParallaxLayer>
            <ParallaxLayer speed={0.2} offset={2}
              style={{
                background: "linear-gradient(to bottom, rgba(107, 39, 55, 0.8), #6B2737, rgba(107, 39, 55, 0.8))",
                }}
            >
              <Grid item
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    
                  }}
              >
                <ParallaxLayer speed={0.5} offset={0.99}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection:"column"
                    }}>
                    <Typography
                      variant="h2"
                      color="white"
                      sx={{mt:30}}
                    >
                      Why Us
                    </Typography>
                    <Typography
                      color="white"
                      variant="h5"
                      align="center"
                      sx={{
                      mr: {xs: 0, sm: 20, md: 50},
                      ml: {xs: 0, sm: 20, md: 50}
                    }}
                    >
                      <b>Expertise:</b> Industry experts committed to staying at the forefront of technology.<br />
                      <b>Personalized:</b> Tailoring solutions to your specific requirements.<br/>
                      <b>Quality:</b> Rigorous quality assurance for flawless results.<br />
                    </Typography>
                    <Divider
                      sx={{ mt: 10, width: "30%", borderColor: "white" }} />
                  </Box>
                </ParallaxLayer>
              </Grid>
            </ParallaxLayer>
            <ParallaxLayer speed={0.2} offset={3}
              style={{
              background: "linear-gradient(to bottom, rgba(166, 216, 212, 0.8), #A6D8D4, rgba(166, 216, 212, 0.8))",
              }}
            >
              <Grid item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <ParallaxLayer speed={0.5} offset={1}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection:"column"
                    }}>
                    <Typography
                      variant="h2"
                      color="white"
                      align='center'
                      sx={{mt:30}}
                    >
                      Let's Collaborate
                    </Typography>
                    <Typography
                      color="white"
                      variant="h5"
                      align="center"
                      sx={{
                        mr: { xs: 0, sm: 20, md: 50 },
                        ml: { xs: 0, sm: 20, md: 50 }
                      }}
                    >
                      Elevate your digital presence with us. Contact us today to bring your vision to life!
                    </Typography>
                    <CTADialog sx={{mt:2}} />
                    <Divider
                      sx={{ mt: 5, width: "30%", borderColor: "white" }} />
                  </Box>
                </ParallaxLayer>
              </Grid>
            </ParallaxLayer>
            </Grid>
        </Parallax>
      </div>
    </>
  )
}
