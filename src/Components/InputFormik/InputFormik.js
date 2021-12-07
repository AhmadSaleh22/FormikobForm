import React from 'react';
import {Field, ErrorMessage} from 'formik'
import TextError from '../TextError/TextError';
import '../../App.css';

function InputFormik(props) {
    const {name, type, placeholder, ...rest} = props;

    return (
        <div className='form-control'>
            <Field id={name} name={name} {...rest} placeholder= {placeholder} type={type} />
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default InputFormik;