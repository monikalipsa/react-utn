    export default function Mascota () {
        let mascota = {
              nombre: 'Berlin',
              edad: 3,
              tipo:'perro',
              colores:  [
                             'blanco',
                             'negro'
               ]
        }

        return (
            <div>
                   <h2> {mascota.nombre}</h2>

                   <p>
                         Edad: {mascota.edad} <br />
                         Tipo: {mascota.tipo}
                   </p>

            </div>
        )
    }