import "./carousel.css";

const Carousel = () => (
  <section className="carousel" id="carousel">
    <div className="carousel">
      {/* Hidden radio buttons to control the carousel */}
      <input type="radio" id="carousel-1" name="carousel" defaultChecked />
      <input type="radio" id="carousel-2" name="carousel" />
      <input type="radio" id="carousel-3" name="carousel" />
      <input type="radio" id="carousel-4" name="carousel" />

      {/* Carousel inner content */}
      <div className="carousel__inner">
        {/* Carousel item 1 */}
        <div className="carousel-item">
          <div
            className="carousel-item__image"
            style={{ backgroundImage: "url('./img/carousel-snack.webp')" }}
          ></div>
          <div className="carousel-item__content">
            <h1>Feeling Snackish?</h1>
            <p>
              Grab your favorite artisanal snacks and treats on UCOOK market.
            </p>
            <button>ORDER NOW</button>
          </div>
        </div>

        {/* Carousel item 2 */}
        <div className="carousel-item">
          <div
            className="carousel-item__image"
            style={{ backgroundImage: "url('./img/carousel-lunch.webp')" }}
          ></div>
          <div className="carousel-item__content">
            <h1>Lunch is served</h1>
            <p>Salad, wrap, sandwich, couscous - the choice is yours!</p>
            <button>SHOP LUNCH</button>
          </div>
        </div>

        {/*Carousel item 3*/}
        <div className="carousel-item">
          <div
            className="carousel-item__image"
            style={{ backgroundImage: "url('./img/carousel-wine.webp')" }}
          ></div>
          <div className="carousel-item__content">
            <h1>A toast to Vilafonte!</h1>
            <p>Add any 3 wines to your Meal Kit order and save 25%</p>
            <button>SHOP NOW</button>
          </div>
        </div>

        {/*Carousel item 4*/}
        <div className="carousel-item">
          <div
            className="carousel-item__image"
            style={{ backgroundImage: "url('./img/carousel-frozen.webp')" }}
          ></div>
          <div className="carousel-item__content">
            <h1>Indulge in hearty Frozen Craft Meals</h1>
            <p>
              From butter chicken to cottage pie, find the perfect meal for a
              cosy night in.
            </p>
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="carousel__nav">
        <label htmlFor="carousel-1" className="carousel__nav__label">
          1
        </label>
        <label htmlFor="carousel-2" className="carousel__nav__label">
          2
        </label>
        <label htmlFor="carousel-3" className="carousel__nav__label">
          3
        </label>
        <label htmlFor="carousel-4" className="carousel__nav__label">
          4
        </label>
      </div>
    </div>
  </section>
);

export default Carousel;
