import React from "react";
import { Carousel } from "react-bootstrap";
import bannar1 from "../../images/bannar-images/bannar1.jpg";
import bannar2 from "../../images/bannar-images/bannar2.jpg";
import bannar3 from "../../images/bannar-images/bannar3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 img-fluid" src={bannar3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-warning">Keep working hard</h3>
            <p>
              Things aren’t always #000000 and #FFFFFF - <span className="text-warning">HTML Proverb</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 img-fluid" src={bannar1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-warning">Development is Key</h3>
            <p>
              System programmers are the high priests of a low cult. - <span className="text-warning">Robert S. Barton</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={bannar2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="text-warning">Eat, Sleep and Code</h3>
            <p>
              {" "}
              Don't comment bad code - rewrite it. - <span className="text-warning">Brian Kernighan</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
