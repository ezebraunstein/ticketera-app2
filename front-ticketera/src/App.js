import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img className="logo" src="./images/pala.png" alt="LA PALA" width="70px" />
        <div className="box-1">
          <div className="btn btn-one">
            <span>Crear Evento</span>
          </div>
        </div>
      </header>

      <div className="slider-frame">
        <ul>
          <li><img className="sliderImg" src="./images/img1.jpg" alt="" /></li>
          <li><img className="sliderImg" src="./images/img2.jpg" alt="" /></li>
          <li><img className="sliderImg" src="./images/img3.jpg" alt="" /></li>
          <li><img className="sliderImg" src="./images/img4.jpg" alt="" /></li>
        </ul>
      </div>

      <div className="divSearchBar">
        <form role="search" id="form" className="searchBar">
          <input type="search" id="query" name="q"
            placeholder="Buscar Eventos..."
            aria-label="Search through site content" />
          <button>
            <svg viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
          </button>
        </form>
      </div>


      <h1 className="featuredEvents">🢃 EVENTOS DESTACADOS 🢃</h1>

      <section id="boxes">
        <div className="container">

          <div className="box">
            <img src="./images/event1.png" alt="event1" />
            <h3>Lolapalooza</h3>
            <p>El festival tendrá lugar el fin de semana del 17 al 19 de marzo de 2023 en su sede del Hipódromo de San Isidro</p>
            <button href="https://www.passline.com/eventos/155887" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
          </div>

          <div className="separar">
            <div className="box">
              <img src="./images/event2.webp" alt="event2" />
              <h3>Adele en Las Vegas</h3>
              <p>Adele se presenta los fines de semana en el Coliseo del Caesar Palace en Las Vegas hasta el 25 de marzo</p>
              <button href="https://www.passline.com/eventos/155887" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
            </div>
          </div>

          <div className="box">
            <img src="./images/event3.jpg" alt="event3" />
            <h3>Cosquin Rock 2023</h3>
            <p>El pogo más grande de Latinoamerica se realizará en el Aeroclub Santa María de Punilla, los días 18 y 19 de febrero</p>
            <button href="https://www.passline.com/eventos/155887" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
          </div>
        </div>

      </section>

      <br />

      <section id="boxes">
        <div className="container">

          <div className="box">
            <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" alt="html5 logo" />
            <h3>HTML 5 Website</h3>
            <p>Curabitur porttitor metus odio, fringilla bibendum sem faucibus quis. C</p>
            <button href="https://www.passline.com/eventos/155887" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
          </div>

          <div className="separar">
            <div className="box">
              <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" alt="html5 logo" />
              <h3>HTML 5 Website</h3>
              <p>Curabitur porttitor metus odio, fringilla bibendum sem faucibus quis. C</p>
              <button href="https://www.passline.com/eventos/155887" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
            </div>
          </div>

          <div className="box">
            <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" alt="html5 logo" />
            <h3>HTML 5 Website</h3>
            <p>Curabitur porttitor metus odio, fringilla bibendum sem faucibus quis. C</p>
            <button href="https://www.passline.com/eventos/155887" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;


<div className="box">
  <img src="" alt="" />
  <h3>Name/h3>
  <p>Description</p>
  <button href="" className="btnBuy" ><i className="icon-ticket"></i>Comprar Tickets</button>
</div>