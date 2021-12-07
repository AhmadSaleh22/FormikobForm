import React from 'react';
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError';
import '../../App.css'
import 'react-datepicker/dist/react-datepicker.css'


function DatePicker(props) {
    const { name, placeholder, ...rest } = props

    return (
        <div className='form-control'>
            <Field name={name} >
                {({ form, field }) => {
                const { setFieldValue } = form
                const { value } = field
                return (
                    <DateView
                    id={name}
                    placeholderText={placeholder}
                    {...field}
                    {...rest}
                    selected={value}
                    onChange={val => setFieldValue(name, val)}
                    />
                )
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default DatePicker;