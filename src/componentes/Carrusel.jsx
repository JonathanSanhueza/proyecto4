import Carousel from 'react-bootstrap/Carousel';
import primera from '../assets/1.jpg';
import segunda from '../assets/2.jpg';
import tercera from '../assets/3.jpg';
import cuarta from '../assets/4.jpg';

function Sushiroll() {
  return (
    <Carousel className='carrusel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={primera}
          alt="First slide"
          height={400}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={segunda}
          alt="Second slide"
          height={400}
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tercera}
          alt="Third slide"
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cuarta}
          alt="Third slide"
          height={400}
        />
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default Sushiroll;