import React from 'react';
import { Field, TextField, ErrorMessage } from 'formik';
import {MenuItem, Select} from '@mui/material';
import TextError from '../TextError/TextError';
import '../../App.css' 


function SelectInput(props) {
    const {label, name, options, placeholder, ...rest} = props
    return (
        <div className='form-control'>
            <Field as='select' id={name} name={name} {...rest} >
                    
                <option value="" disabled selected defaultValue=''>{placeholder}</option>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.value}</option>
                            )
                        })
                    }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default SelectInput;