import { useState } from "react";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import PropTypes from 'prop-types';
import { PRIORIDAD } from "../clases/Constantes";
import Tarea from "../clases/Tarea";

const RegistrarTareaComponent = ({ registrar }) => {

    const procesar = () => {
        alert("Procesando");
    };

    const validacion = Yup.object({
        txtTitulo: Yup
            .string('Ingresa el titulo')
            .required('Es requerido'),
        txtDescripcion: Yup
            .string('Ingresa la descripcion')
            .required('Es requerido'),
        cmbPrioridad: Yup
            .string('Selecciona la prioridad')
            .required('Es requerido'),
    });

    const formik = useFormik({
        initialValues: {
            txtTitulo: '',
            txtDescripcion: '',
            cmbPrioridad: ''
        },
        validationSchema: validacion,
        onSubmit: (values) => {
            const tarea = new Tarea();
            tarea.titulo = values.txtTitulo;
            tarea.descripcion = values.txtDescripcion;
            tarea.prioridad = values.cmbPrioridad;
            tarea.completada = false;
            
            registrar(tarea);

            values.txtTitulo = '';
            values.txtDescripcion = '';
            values.cmbPrioridad = '';
        },
    });

    return (
        <div className="mt-4">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="txtTitulo"
                    name="txtTitulo"
                    label="Titulo"
                    value={formik.values.txtTitulo}
                    onChange={formik.handleChange}
                    error={formik.touched.txtTitulo && Boolean(formik.errors.txtTitulo)}
                    helperText={formik.touched.txtTitulo && formik.errors.txtTitulo}
                />

                <TextField
                    fullWidth
                    id="txtDescripcion"
                    name="txtDescripcion"
                    label="Descripcion"
                    value={formik.values.txtDescripcion}
                    onChange={formik.handleChange}
                    error={formik.touched.txtDescripcion && Boolean(formik.errors.txtDescripcion)}
                    helperText={formik.touched.txtDescripcion && formik.errors.txtDescripcion}
                />

                <TextField
                    fullWidth
                    id="cmbPrioridad"
                    name="cmbPrioridad"
                    label="Prioridad"
                    select
                    value={formik.values.cmbPrioridad}
                    onChange={formik.handleChange}
                    error={formik.touched.cmbPrioridad && Boolean(formik.errors.cmbPrioridad)}
                    helperText={formik.touched.cmbPrioridad && formik.errors.cmbPrioridad}
                >
                    <MenuItem value={PRIORIDAD.NORMAL}>Normal</MenuItem>
                    <MenuItem value={PRIORIDAD.URGENTE}>Urgente</MenuItem>
                </TextField>

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Registrar
                </Button>
            </form>
        </div>
    );
}

RegistrarTareaComponent.propTypes = {
    registrar: PropTypes.func.isRequired
};

export default RegistrarTareaComponent;