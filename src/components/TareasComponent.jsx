import { useState } from "react";
import { PRIORIDAD } from "../clases/Constantes";
import RegistrarTareaComponent from "./RegistrarTareaComponent";
import TareaComponent from "./TareaComponent";

export const TareasComponent = () => {

    const [tareas, setTareas] = useState([
        {
            titulo: 'Test 1',
            descripcion: 'Descripcion 1',
            prioridad: PRIORIDAD.NORMAL,
            completada: false
        }
    ]);

    const cambiarEstado = (tarea) => {
        const indice = tareas.indexOf(tarea);
        if (indice !== -1) {
            const tmpTareas = [...tareas];
            tarea.completada = !tarea.completada;
            tmpTareas.splice(indice, 1, tarea);
            setTareas(tmpTareas);
        }
    };

    const eliminar = (tarea) => {
        const indice = [...tareas].indexOf(tarea);
        if (indice !== -1) {
            if (window.confirm("¿Eliminar tarea '" + tarea.titulo + "'?")) {
                const tmpTareas = [...tareas];
                tmpTareas.splice(indice, 1);
                setTareas(tmpTareas);
            }
        }
    };

    const registrar = (tarea) => {
        const tmpTareas = [...tareas, tarea];
        setTareas(tmpTareas);
    };

    return (
        <div className="container mt-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Prioridad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    {tareas.map((tarea, index) => {
                        return (
                            <TareaComponent key={index} tarea={tarea} cambiarEstado={cambiarEstado} eliminar={eliminar} />
                        );
                    })}
                </tbody>
            </table>

            {tareas.length === 0 && (<div className="text-center">No se encontraron resultados</div>)}

            <RegistrarTareaComponent registrar={registrar} />
        </div>
    );
};