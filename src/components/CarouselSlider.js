import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = ({ imgSlider }) => {
  return (
    <>
      {imgSlider && (
        <section className="single-project-slider">
          <div>
            <Carousel showThumbs={false} showStatus={false}>
              {imgSlider.imgs.map((img, i) => {
                return (
                  <div key={i}>
                    <img src={img} alt="screenshots slider" loading="lazy" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
};

export default CarouselSlider;
