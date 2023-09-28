import React, { useRef } from 'react'
import {  Grid } from '@mui/material'
import { SEOHead } from '../Utils/Head'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

export const Pricing = () => {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const slideRef = useRef<IParallax>(null!);
  return (
    <>
       <SEOHead
        title={'Preise'}
        description={'Gib uns viel Kohle'}
        rel={'canonical'}
        href={'/pricing'}
      />
      <div ref={containerRef}>
      <Parallax
        pages={4}
        ref={slideRef}
        style={{
          top: "0",
          left: "0",
        }}
      >
        <Grid container
          display="flex"
          alignItems="center"
          justifyContent="center">
          <ParallaxLayer speed={0.2} offset={0}>
            <Grid item sx={{mt: 30}}>Unsere Preise</Grid>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} offset={1}>
            <Grid item sx={{mt: 30}}>Gib Geld für Webseite</Grid>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} offset={2}>
            <Grid item sx={{mt: 30}}>Gib Geld für App</Grid>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} offset={3}>
            <Grid item sx={{mt: 30}}>Gib Geld ohne Grund</Grid>
          </ParallaxLayer>
        </Grid>
        </Parallax>
        </div>
    </>
  )
}
