import React from "react";
import { Component } from "react";
import {
    Carousel
} from "react-bootstrap";

export class CarouselImage extends Component {
    render() {
        return(
            <div>
                <Carousel variant="grey">
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://images.pexels.com/photos/47313/tulips-bloom-blossom-colorful-47313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: '500px'}} alt="First slide"/>
                        <Carousel.Caption>
                        <h3 id="title-car-image">Une autre vision du Service Après-Vente</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: '500px'}} alt="First slide"/>
                        <Carousel.Caption>
                        <h3 id="title-car-image">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: '500px'}} alt="First slide"/>
                        <Carousel.Caption>
                        <h3 id="title-car-image">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}