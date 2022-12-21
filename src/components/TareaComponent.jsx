import PropTypes from 'prop-types';
import Tarea from '../clases/Tarea';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, FormControlLabel, FormGroup, IconButton } from '@mui/material';
import { PRIORIDAD } from '../clases/Constantes';

const TareaComponent = ({tarea, cambiarEstado, eliminar}) => {

    const getColorPrioridad = (prioridad) => {
        switch (prioridad) {
            case PRIORIDAD.URGENTE:
                return "RED";
            default:
                return "GREY";
        }
    };

    return (
        <tr style={ tarea.completada ? {textDecoration: 'line-through'} : {} }>
            <td>{tarea.titulo}</td>
            <td>{tarea.descripcion}</td>
            <td>
                <span style={{ color: getColorPrioridad(tarea.prioridad) }}>{tarea.prioridad}</span>
            </td>
            <td>
                <Checkbox value={tarea.completada} onChange={() => cambiarEstado(tarea)} />
                <IconButton color="error" component="label" onClick={() => eliminar(tarea)}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
};

TareaComponent.propTypes = {
    tarea: PropTypes.instanceOf(Tarea).isRequired,
    cambiarEstado: PropTypes.func.isRequired,
    eliminar: PropTypes.func.isRequired
};

export default TareaComponent;