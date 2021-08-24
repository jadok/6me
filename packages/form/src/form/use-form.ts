import { ChangeEvent, FormEvent, useState } from 'react';
import { FieldInputs, FormData, FormOutput, FormProps } from './form.interface';

const fieldsToFormData = (fields: Record<string, FieldInputs>): Record<string, FormData> =>
  Object.keys(fields).reduce((data: Record<string, FormData>, fieldName: string) => {
    data[fieldName] = {
      value: fields[fieldName].inputProps?.value,
      error: '',
    } as FormData;
    return data;
  }, {});

const formDataToData = (formFields: Record<string, FormData>): Record<string, string> =>
  Object.keys(formFields).reduce((data: Record<string, string>, fieldName: string) => {
    data[fieldName] = formFields[fieldName].value;
    return data;
  }, {} as Record<string, string>);

export const useForm = ({ fields, afterSubmit }: FormProps): FormOutput => {
  const [data, setData] = useState<Record<string, FormData>>(fieldsToFormData(fields));

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setData({
      ...data,
      [event.currentTarget.name]: {
        error: data[event.currentTarget.name].error,
        value: event.currentTarget.value,
      },
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    afterSubmit(formDataToData(data));
  };

  return {
    data,
    fields,
    handleChange,
    handleSubmit,
  };
};
