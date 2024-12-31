import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Carousel = ({ slides, time }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("right");

    const nextSlide = () => {
        setDirection("right");
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection("left");
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? "right" : "left");
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (!time) return;
        const interval = setInterval(() => {
            nextSlide();
        }, time);
        return () => clearInterval(interval);
    }, [currentSlide, time]);

    let color = [];
    slides.forEach(element => {
        color.push(element.titleColor)
    });

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: {xs:"60vh", sm:"80vh"},
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    height: "100%",
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
                >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: "0 0 100%",
                            position: "relative",
                            background: `url(${slide.bg}) center/cover no-repeat`,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: 'flex-start',
                            boxSizing: "border-box",
                        }}
                    >
                        <Stack 
                            sx={{ 
                                textAlign: "left",
                                backgroundColor: `rgba(0,0,0,0.6)`,
                                width: '100%',
                            }}
                            gap={{xs:1, sm:2}}
                            padding={'2% 3%'}
                        >
                            <Typography
                                variant="h3"
                                fontSize={{xs:'2em', md:'4em'}}
                                fontWeight={'bold'}
                                color={slide.titleColor?slide.titleColor:'#fff'}
                            >
                                {slide.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color={slide.color?slide.color:'#fff'}
                                fontSize={{xs: ".7em",sm:"1em"}}
                            >
                                {slide.desc}
                            </Typography>
                            <Stack
                                justifyContent={'center'}
                                gap={{xs:1.5, sm:2}}
                                direction={'row'}
                            >
                                {slides.map((_, dotIndex) => (
                                    <Box
                                        key={dotIndex}
                                        onClick={() => goToSlide(dotIndex)}
                                        sx={{
                                            width: "1vh",
                                            height: "1vh",
                                            borderRadius: "50%",
                                            backgroundColor:
                                                dotIndex === currentSlide
                                                    ? color[dotIndex%slides.length]+'.main'
                                                    : "#C5CAE9",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Box>

            <IconButton
                onClick={prevSlide}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "2vh",
                    color: "#fff",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: `rgba(0,0,0,0.6)`,
                    
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '.8%'
                }}
            >
                <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
                onClick={nextSlide}
                disableRipple
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "2vh",
                    color: "#fff",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: `rgba(0,0,0,0.6)`,
                    
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '.8%'
                }}
            >
                <KeyboardArrowRightIcon />
            </IconButton>
        </Box>
    );
};

export default Carousel;
