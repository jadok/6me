import { Field } from './field';
import React from 'react'
import { FormOutput } from './form.interface';

export const FormMotor = ({
  data,
  fields,
  handleChange,
}: FormOutput): JSX.Element => (
  <>
    {Object.keys(data).map((fieldName) => (
      <Field key={fieldName} {...fields[fieldName]} inputProps={{ ...fields[fieldName].inputProps, value: data[fieldName].value, id: fields[fieldName].inputProps?.id ? fields[fieldName].inputProps?.id : fields[fieldName].inputProps?.name }} handleChange={handleChange} />
    ))}
  </>
);
