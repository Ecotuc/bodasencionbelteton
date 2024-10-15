import './App.css';

function App() {
  return (
    <div className='main-container container text-center'>
      <div className="row video text-center">
        <div className="video-container">
          <video src="/video/invite.mp4" controls style={{ width: '80%' }}>
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
      <div className='row cont'>
        <div className=" rings">
          <div className="image-container">
            <img src="/images/anillos.png" alt="Descripción de la imagen" />
          </div>
        </div>
        <div className=" names">
          <div className="image-container-names">
            <img src="/images/Nombres.png" alt="Descripción de la imagen"/>
          </div>
        </div>
        <div className=" date">
          <div className="image-container-date">
            <img src="/images/fecha.png" alt="Descripción de la imagen"/>
          </div>
        </div>
        <div className=" buttns">
          <a href='https://waze.com/ul/h9fxe118fq' target="_blank" rel="noopener noreferrer">
            <div className='image-container-date-location'>
              <img src="/images/Regalos.png" alt="Descripción de la imagen"/>
            </div>
          </a>
          <a href='https://www.cemaco.com/list/bodasencionbelteton' target="_blank" rel="noopener noreferrer">
            <div className='image-container-date-presents'>
              <img src="/images/Regalos.png" alt="Descripción de la imagen"/>
            </div>
          </a>
        </div>
      </div>
      <div className="line-container">
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default App;
