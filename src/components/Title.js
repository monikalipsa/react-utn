import './Title.css';


// Exportamos nuestro componente Title
// Los componenes son funciones
export default function Title ({titulo, subtitulo}) {
       return (
                  //className es el equivalente a class en JSX
                  <div>
                             <h1 className="title">
                                   {titulo}
                             </h1>
                              {/* Pregunto si se recibio un subtitulo
                                      Si es asi creo el parrafo, sino no */}
                             {subtitulo &&
                               <p> {subtitulo} </p>
                             }
                {/* OPCION 1:
                 Pregunto si se recibiò un subtitulo, si es asi lo muestro
                 sino mustro un texto predeterminado
                       TERNARY / ONICIONAL TERNARIO */}
                <p> {subtitulo ? subtitulo : 'predeterminado'} </p>

                {/* OPCION 2:
                  Si el subtitulo se envio, lo muestro, sino no hago nada:
                      {subtitulo &&
                             <p>{subtitulo}</p>
                       } */}
                           
                 </div>
            
        )
}