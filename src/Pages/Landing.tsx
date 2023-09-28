import React, { useState, useRef } from "react";
import { Typography, IconButton, Box } from "@mui/material";
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { SEOHead } from "../Utils/Head";
import { useScroll, animated } from "@react-spring/web";

export const Landing = () => {
    const { scrollYProgress } = useScroll()
    const barContainerRef = React.useRef<HTMLDivElement>(null!)
    const containerRef = React.useRef<HTMLDivElement>(null!)
    const [slideDeepContent, setSlideDeepContent] = useState<boolean>(false);
    const [slides,] = useState([
        {
        productId: 0,
        backgroundImg: "https://fastly.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU",
        title: "Hallo",
        description:"WTF IS THAT?"
        },
        {
        productId: 1,
        backgroundImg: "https://fastly.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU",
        title: "Hallo",
        description:"WTF IS THAT?"
        },
        {
        productId: 2,
        backgroundImg: "https://fastly.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU",
        title: "Hallo",
        description:"WTF IS THAT?"
        },
        {
        productId: 3,
        backgroundImg: "https://fastly.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU",
        title: "Hallo",
        description:"WTF IS THAT?"
        }
    ]);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideRef = useRef<IParallax>(null!);

    const scrollOnClick = () => {
        currentSlide === (slides.length - 1) ?
            (
                slideRef.current.scrollTo(0),
                setCurrentSlide(0),
                setSlideDeepContent(false)
            ) : (
                slideRef.current.scrollTo(currentSlide + 1),
                setCurrentSlide(currentSlide + 1),
                setSlideDeepContent(false)
            )
    }

    const handleScroll = (offset: number) => {
        const delta = Math.sign(offset);
        const isGoingUp = delta < 0;
        const isGoingDown = delta > 0;
        const isNotLastSlide = currentSlide < slides.length - 1;
        const isNotFirstSlide = currentSlide > 0;
        if (isGoingDown && isNotLastSlide) {
            setSlideDeepContent(false)
            setCurrentSlide(currentSlide + 1);
            console.log(currentSlide,
                slideRef.current.scrollTo(currentSlide + 1)
            )
        } else if (isGoingUp && isNotFirstSlide) {
            setSlideDeepContent(false)
            setCurrentSlide(currentSlide - 1);
            slideRef.current.scrollTo(currentSlide - 1)
        }
    };
    return (
        <>
            <SEOHead
                title={'My Landingpage'}
                description={'besser als deine!'}
                rel={'canonical'}
                href={'/landing'}
            />
             <div ref={containerRef}>
            <animated.div ref={barContainerRef} style={{ opacity: scrollYProgress }}>
                {slides.length &&
                <Parallax
                    style={{ top:0,left:0}}
                        pages={slides.length}
                        ref={slideRef}
                        onWheelCapture={(event: { deltaY: number; }) => {
                            handleScroll(event.deltaY)
                        }}
                    >
                        {slides?.map((slide) => (
                            <ParallaxLayer
                                offset={slide.productId - 1}
                                speed={0.02}
                                key={slide.productId}
                                style={{
                                     backgroundImage: slide.backgroundImg ? `url(${slide.backgroundImg})` : "",
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "center",
                                     top: 0,
                                     left: 0,
                                     backgroundRepeat: 'no-repeat',
                                     backgroundPosition: 'center center',
                                     backgroundAttachment: 'fixed',
                                    backgroundSize: 'cover',
                                     overflow:"hidden"
                                }}
                            >
                                <ParallaxLayer
                                    speed={0.04}
                                    onClick={scrollOnClick}  >
                                    <Box  >
                                        <Box  >
                                           Hallo
                                        </Box>
                                        {slideDeepContent ? (
                                            <Box   >
                                                Hallö
                                            </Box>
                                        ) : (
                                                <Box 
                                                     >
                                                    <Typography align="center"
                                                        variant="h1" color="white">
                                                        {slide.title}
                                                    </Typography>
                                                </Box>
                                        )}
                                        <Box >
                                            <IconButton
                                                onClick={(e) => {
                                                    e.stopPropagation(),
                                                        setSlideDeepContent(!slideDeepContent)
                                                }}>
                                            </IconButton>
                                        </Box>
                                        <Box >
                                            {slideDeepContent &&
                                                (
                                                    <>
                                                        <Typography variant="h2" color="white">
                                                            {slide.title}
                                                        </Typography>
                                                        <Typography color="white">
                                                            {slide.description}
                                                        </Typography>
                                                    </>
                                                )}
                                        </Box>
                                    </Box>
                                </ParallaxLayer >
                            </ParallaxLayer >
                        ))}
                    </Parallax >
                }
            </animated.div>
            </div>
        </>
    );
};

