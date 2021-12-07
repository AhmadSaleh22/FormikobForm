import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from '../TextError/TextError';
import '../../App.css'
function TextArea(props) {
    const {name, placeholder, ...rest} = props;
    return (
        <div className='form-control'>
            <Field className="textAreaInput" as='textarea' id={name} name={name} placeholder={placeholder} rows="7" {...rest} />
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default TextArea;