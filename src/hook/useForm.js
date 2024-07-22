    // uso de HOOKS para el formulario {useState}

import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );    // estado inicial del formulario


     // permite cambiar los valores en los campos del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {       // reinicia el formulario a su estado inicial
        setFormState( initialForm );
    }

    return {                         // retorna el estado del formulario y las funciones de manejo
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}