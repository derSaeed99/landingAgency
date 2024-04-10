import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import { SEOHead } from '../Utils/Head'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { PricingCards } from '../Components/PricingCards'
import { CaTiers } from '../typing/types'
import desktop4 from '../assets/Desktop-4.webp'

export const Services = () => {
    const tiers: CaTiers[] = [
        {
            title: 'Websites',
            description:
                'Ideal for small businesses, freelancers, and personal projects.',
            subHeader:
                'Visiting Card Website, Landing Page, Blog, Portfolio etc.',
            contactType: 'website',
        },
        {
            title: 'WebApp',
            description:
                'Make your business more efficient with a custom web application.',
            subHeader: 'Custom Web Application, E-commerce, CRM, etc.',
            contactType: 'webApp',
        },
        {
            title: 'MVP',
            description:
                'Get your startup off the ground with a minimum viable product.',
            subHeader:
                'Custom Calendar, Task Manager, Scheduler, Todo App, etc.',
            contactType: 'mvp',
        },
    ]
    const containerRef = React.useRef<HTMLDivElement>(null!)
    const slideRef = useRef<IParallax>(null!)
    return (
        <>
            <SEOHead
                title={'Services'}
                description={'Was ich anbiete'}
                rel={'canonical'}
                href={'/services'}
            />
            <div ref={containerRef}>
                <Parallax
                    pages={1}
                    ref={slideRef}
                    style={{
                        top: '0',
                        left: '0',
                        background: 'radial-gradient(circle,#708090 , #333333)',
                        opacity: 1,
                        backgroundImage: desktop4 ? `url(${desktop4})` : '',
                        backgroundSize: 'cover',
                    }}
                >
                    <Grid
                        container
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <ParallaxLayer speed={1} offset={0.2}>
                            {tiers && (
                                <Grid item>
                                    <PricingCards tiers={tiers} />
                                </Grid>
                            )}
                        </ParallaxLayer>
                    </Grid>
                </Parallax>
            </div>
        </>
    )
}
