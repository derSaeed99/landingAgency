import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import { SEOHead } from '../Utils/Head'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { PricingCards } from '../Components/PricingCards'
import { CaTiers } from '../typing/types'

export const Pricing = () => {
    const tiers: CaTiers[] = [
        {
            title: 'Websites',
            price: '1500',
            description:
                ' 10 users included, 2 GB of storage, Help center access, Email support',
            subHeader: 'Get started',
            contactType: 'website',
        },
        {
            title: 'SEO Optimization',
            price: '1200',
            description:
                '20 users included 10 GB of storag eHelp center access Priority email support',
            subHeader: 'Get started',
            contactType: 'seo',
        },
        {
            title: 'WebApp',
            price: 'X',
            description:
                '50 users included 30 GB of storag, eHelp center access, Phone & email support',
            subHeader: 'Contact us for personal offerd',
            contactType: 'webApp',
        },
        {
            title: 'Minimum Viable Product',
            price: 'x',
            description:
                '50 users included 30 GB of storag, eHelp center access, Phone & email support',
            subHeader: 'Contact us for personal offer',
            contactType: 'mvp',
        },
    ]
    const containerRef = React.useRef<HTMLDivElement>(null!)
    const slideRef = useRef<IParallax>(null!)
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
                    pages={1.2}
                    ref={slideRef}
                    style={{
                        top: '0',
                        left: '0',
                        background: 'radial-gradient(circle,#708090 , #333333)',
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
