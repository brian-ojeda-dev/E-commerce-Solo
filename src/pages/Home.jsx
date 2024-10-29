import Swiper from 'swiper'
export default function Home() {
  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
  return (
    <div>
          <section className="container">
      <div className="container swiper">
        <div className="card-wrapper">
          <ul className="card-list swiper-wrapper">
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/alexander-rotker-l8p1aWZqHvE-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-reciente">Reciente</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/domino-studio-164_6wVEHfI-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-favorito">Favorito</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/felipepelaquim-6zO5VKogoZE-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-popular">Popular</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/hipkicks-LdhTorI9T-o-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-favorito">Favorito</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/huyen-nguy-IjzhMi4Cw3w-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-mascomprado">Mas Comprados</p>
                <h2 className="card-title">Lo Mas Nuevo De Convers</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/imani-bahati-LxVxPA1LOVM-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-mascomprado">Mas Comprados</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
          </ul>
    
          <div className="swiper-pagination"></div>
    
          <div className="swiper-slide-button swiper-button-prev"></div>
          <div className="swiper-slide-button swiper-button-next"></div>
        </div>
      </div>

    </section>
   <section className="container">
      <div className="container swiper">
        <div className="card-wrapper">
          <ul className="card-list swiper-wrapper">
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/alexander-rotker-l8p1aWZqHvE-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-reciente">Reciente</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/domino-studio-164_6wVEHfI-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-favorito">Favorito</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/felipepelaquim-6zO5VKogoZE-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-popular">Popular</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/hipkicks-LdhTorI9T-o-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-favorito">Favorito</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/huyen-nguy-IjzhMi4Cw3w-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-mascomprado">Mas Comprados</p>
                <h2 className="card-title">Lo Mas Nuevo De Convers</h2>
              </a>
            </li>
            <li className="card-item swiper-slide">
              <a href="#" className="card-link">
                <img src="Imagenes/Slider/imani-bahati-LxVxPA1LOVM-unsplash.jpg" alt="Card Image" className="card-image"/>
                <p className="badge badge-mascomprado">Mas Comprados</p>
                <h2 className="card-title">Lorem ipsum dolor sit explicabo adipisicing elit</h2>
              </a>
            </li>
          </ul>
    
          <div className="swiper-pagination"></div>
    
          <div className="swiper-slide-button swiper-button-prev"></div>
          <div className="swiper-slide-button swiper-button-next"></div>
        </div>
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
      <script src="script.js"></script>
    </section>
    </div>
  )
}
