import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from './ShowCaseSlider.module.scss';

const { slideImg, slideBtn } = classes;

const showCaseSlider = (props) => {
    return (
        <CarouselProvider
            naturalSlideWidth={props.slideWidth}
            naturalSlideHeight={props.slideHeight}
            totalSlides={props.slideNumber}>
            <Slider style={{ textAlign: "center" }}>
                <Slide
                    className={slideImg}
                    index={0}>
                    <img src={props.slideImageA} alt="slider 1" />
                </Slide>
                <Slide
                    className={slideImg}
                    index={1}>
                    <img src={props.slideImageB} alt="slider 2" />
                </Slide>
                <Slide
                    className={slideImg}
                    index={2}>
                    <img src={props.slideImageC} alt="slider 3" />
                </Slide>
            </Slider>
            <section style={{ textAlign: "center" }}>
                <ButtonBack className={slideBtn}>Back</ButtonBack>
                <ButtonNext className={slideBtn}>Next</ButtonNext>
            </section>

        </CarouselProvider>
    );
};


export default showCaseSlider;