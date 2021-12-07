import React from 'react';
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError';
import '../../App.css'
import { OptionsCheck } from '../../Data/Data';


function CheckBox(props) {
    const { name, ...rest } = props
    return (
        <div className='form-control'>
            <Field name={name}>
                {({ field }) => {
                return OptionsCheck.map(option => {
                    return (
                    <React.Fragment key={option.key}>
                        <input
                        type='checkbox'
                        id={option.key}
                        {...field}
                        {...rest}
                        value={option.value}
                        />
                        <label htmlFor={option.key}>{option.value}</label>
                    </React.Fragment>
                    )
                })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default CheckBox;