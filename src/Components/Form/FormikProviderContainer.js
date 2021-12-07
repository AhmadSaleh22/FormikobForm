import React from 'react';
import {Field, Formik, Form, FormikProps, FieldArray} from 'formik'
import DatePicker from '../DatePicker/DatePicker';
import InputFormik from '../InputFormik/InputFormik';
import SelectInput from '../Select/SelectInput';
import TextArea from '../TextArea/TextArea';
import {JobTitle, JobField, JobLocation, CompanySector, CompanySize, Currency, valuesDist} from '../../Data/Data'
import initialValues from '../../Utils/initialValues';
import CheckBox from '../CheckBox/CheckBox';
import '../../App.css'
import { validationSchema } from '../../Utils/Schema';




function FormikProviderContainer(props) {
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
      }
    
      return (
          <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}

          >
            {({values})=>(
              <Form>
                <FieldArray name='valuesDist'>
                  {
                    ({insert, remove, push}) =>(
                      <div>
                        {values.valuesDist.map((valuesDis,index)=>(
                          <div key={index}>
                          <div style={{ display:'flex', justifyContent:'safe left' }}>
                          <h3 style={{ marginRight: '250px' }}>Job Details</h3>
                          <button type='button' id='deletebtn' onClick={()=> remove(index)}>X</button>
                          </div>
                          <SelectInput
                          name = {`valuesDis.${index}.jobTitle`}
                          options = {JobTitle}
                          placeholder = "Job Title"
                          />
                          <SelectInput
                          name = "jobField"
                          options = {JobField}
                          placeholder = "Job Field"
                          />
                          <SelectInput
                          name = {`valuesDis.${index}.jobLocation`}
                          options = {JobLocation}
                          placeholder = "Job Location"
                          />
                          <div id='date'>
                            <span>
                            <DatePicker 
                            id = 'datePicker'
                            name = {`valuesDis.${index}.startDate`}
                            placeholder= "Start Date"
                            />
                            </span>
                            <span>
                            <DatePicker 
                            id = 'datePicker1'
                            name = {`valuesDis.${index}.endDate`}
                            placeholder= "End Date"
                            />
                            </span>
                          </div>
                          <CheckBox 
                            name = {`valuesDis.${index}.currentlyWork`}
                            />
                            <TextArea 
                            name = {`valuesDis.${index}.jobDescription`}
                            placeholder = "Job Description"
                            />
                            <h3>Company Details</h3>
                            <InputFormik
                            name = {`valuesDis.${index}.companyName`}
                            type = "text"
                            placeholder = "Company Name"
                            />
                            <InputFormik
                            name = {`valuesDis.${index}.companyAddress`}
                            type = "text"
                            placeholder = "Company Address"
                            />
                            <SelectInput
                            name = {`valuesDis.${index}.companyIndustry`}
                            options = {CompanySector}
                            placeholder = "Company Industry"
                              />
                            <SelectInput
                            name = {`valuesDis.${index}.companySize`}
                            options = {CompanySize}
                            placeholder = "Company Size"
                              />
                            <SelectInput
                            name = {`valuesDis.${index}.companySector`}
                            options = {CompanySector}
                            placeholder = "Company Sector"
                              />
                            <InputFormik
                            name = {`valuesDis.${index}.supervisorName`}
                            type = "text"
                            placeholder = "Supervisor Name"
                            />
                            <InputFormik
                            name = {`valuesDis.${index}.numOfSupervised`}
                            type = "number"
                            placeholder = "# of Employees Supervised By You"
                            />
                            <InputFormik
                            name = {`valuesDis.${index}.reasonOfLeaving`}
                            type = "text"
                            placeholder = "Reason Of Leaving"
                            />
                            <div className='salary'>
                              <InputFormik
                              id= "salary1"
                              name = {`valuesDis.${index}.startSalary`}
                              type = "number"
                              placeholder = "Start Salary"
                              />
                              <InputFormik
                              id= "salary2"
                              name = {`valuesDis.${index}.endSalary`}
                              type = "number"
                              placeholder = "End Salary"
                              />
                              <SelectInput
                              id= "salary3"
                              name = {`valuesDis.${index}.currency`}
                              name = "currency"
                              options = {Currency}
                              placeholder = "Currency"
                              />
                            </div>
                          <button type='button' id='btn' 
                          onClick={()=> push({jobTitle  : '',
                          jobField : '',
                          jobLocation : '',
                          startDate : '',
                          endDate : '',
                          currentlyWork: [],
                          jobDescription : '',
                          companyName: '',
                          companyAddress: '',
                          companyIndustry: '',
                          companySize: '',
                          companySector: '',
                          supervisorName: '',
                          numOfSupervised: '',
                          reasonOfLeaving :'',
                          startSalary: '',
                          endSalary: '',
                          currency: '',})} >+ SAVE & ADD ANOTHER RECORD</button>
                        </div>
                        ))}
                      </div>
                    )
                  }
                </FieldArray>
                 <br/>
                 <button type='submit' id='nextbtn'>Next</button>
              </Form>
    
            )}
          </Formik>
      );
}

export default FormikProviderContainer;