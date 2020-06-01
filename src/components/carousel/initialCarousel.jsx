import React, {Component} from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'
import swGif from '../../media/gifs/sw-gif.gif'


export default class initialCarousel extends Component{
    render(){
        return(
            <div>
                <Carousel indicators={false} controls={true} interval={4500} fade={true}>
                    <Carousel.Item>
                        <img
                        className="d-block imgItemCarousel"
                        src={swGif}
                        alt="SW gif intro"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block imgItemCarousel"
                        src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg"
                        alt="SW gif intro"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block imgItemCarousel"
                        src="https://wallpaperaccess.com/full/168208.jpg"
                        alt="SW gif intro"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block imgItemCarousel"
                        src="https://i.pinimg.com/originals/a5/0b/ba/a50bba31934ab3585c39d49b97d703c1.jpg"
                        alt="SW gif intro"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}