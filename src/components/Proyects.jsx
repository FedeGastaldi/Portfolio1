import React from 'react'

const Proyects = () => {
  return (
    <section>
        <h2 id="proyectos">Proyectos</h2>

        <article className='articulos'>
            <figure>
              <img src="https://i.pinimg.com/originals/4c/71/81/4c7181fd96de7c879f51c5c7946e5bf9.jpg" alt="" className='img-art' />
              <div className='nota'>
                <h3>Cotizador de Criptomonedas</h3>
                <blockquote>
                  <p>Proyecto de cotizador de criptomonedas desarrollado en React</p>
                </blockquote>
                <a href="https://criptoapp1.netlify.app/" target="_blank" className='deploy' >Deploy</a>
              </div>

            </figure>
            
        </article>
        <article className='articulos'>
          <figure>
              <img src="https://i.pinimg.com/originals/3d/f4/d0/3df4d06aafb47bc332335355bd71c5af.jpg" alt="" className='img-art' />
              <div className='nota'>
                <h3>Buscador de Clima</h3>
                <blockquote>
                  <p>App de clima desarrollada en Vite con React y consultando una API</p>
                </blockquote>
                <a href="https://climapp2.netlify.app/" target="_blank" className='deploy' >Deploy</a>
              </div>
          </figure>
        </article>
        <article className='articulos'>
          <figure>
              <img src="https://i.pinimg.com/originals/69/f0/cf/69f0cfcd4a05bebbef12d416352a73ba.jpg" alt="" className='img-art' />
              <div className='nota'>
                <h3>Administrador de pacientes</h3>
                <blockquote>
                  <p>App de veterinaria desarrollada en Vite con React y TailwindCSS</p>
                </blockquote>
                <a href="https://veteapp.netlify.app/" target="_blank" className='deploy' >Deploy</a>
              </div>
          </figure>

        </article>



    </section>
  )
}

export default Proyects
