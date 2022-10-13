import React from 'react'

const Proyects = () => {
  return (
    <section>
        <h2 id="proyectos">Proyectos</h2>

        <article className='articulos'>
            <figure>
              <img src="src/img/cripto.png" alt="" className='img-art' />
              <div className='nota'>
                <h3>Cotizador de Criptomonedas</h3>
                <blockquote>
                  <p>Proyecto de cotizador de criptomonedas desarrollado en React</p>
                </blockquote>
                <a href="https://effortless-marshmallow-a38240.netlify.app/" target="_blank" className='deploy' >Deploy</a>
              </div>

            </figure>
            
        </article>
        <article className='articulos'>
          <figure>
              <img src="src/img/clima.png" alt="" className='img-art' />
              <div className='nota'>
                <h3>Buscador de Clima</h3>
                <blockquote>
                  <p>App de clima desarrollada en Vite con React y consultando una API</p>
                </blockquote>
                <a href="https://soft-madeleine-b55979.netlify.app/" target="_blank" className='deploy' >Deploy</a>
              </div>
          </figure>
        </article>
        <article className='articulos'>
          <figure>
              <img src="src/img/veterinaria.png" alt="" className='img-art' />
              <div className='nota'>
                <h3>Administrador de pacientes</h3>
                <blockquote>
                  <p>App de veterinaria desarrollada en Vite con React y TailwindCSS</p>
                </blockquote>
                <a href="https://effortless-marshmallow-a38240.netlify.app/" target="_blank" className='deploy' >Deploy</a>
              </div>
          </figure>

        </article>



    </section>
  )
}

export default Proyects