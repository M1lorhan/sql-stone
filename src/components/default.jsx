
import './default.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../images/ari-he-RBp-OuWHRz0-unsplash.jpg';
import CarouselImage2 from '../images/ethan-robertson-SYx3UCHZJlo-unsplash.jpg';
import CarouselImage3 from '../images/joshua-kettle-98SBGzseO-8-unsplash.jpg';
import CarouselImage4 from '../images/joseph-greve-dPw0N01onxE-unsplash.jpg';
import CarouselImage5 from '../images/david-lezcano-mNCFOaaLu5o-unsplash.jpg';

function Default() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block" src={CarouselImage1} alt="Sunglasses at sunset by Ari He on Unsplash" />
            <Carousel.Caption>
                <h3>Unparalleled Style</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src={CarouselImage2} alt="Sunglasses in sand by Ethan Robertson on Unsplash" />
            <Carousel.Caption>
                <h3>Unmatched Features</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src={CarouselImage3} alt="Italian seaside reflection in sunglasses by Joshua Kettle on Unsplash" />
            <Carousel.Caption>
                <h3>Revolutionary Functionality </h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src={CarouselImage4} alt="Sunglasses on railing by Joseph Greve on Unsplash" />
            <Carousel.Caption>
                <h3>Innovative Design</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src={CarouselImage5} alt="Sunglasses on pool deck by David Lezcano on Unsplash " />
            <Carousel.Caption>
                <h3>Pioneering Fashion</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}

export default Default;
