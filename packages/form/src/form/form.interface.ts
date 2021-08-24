import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface FieldInputs {
  className?: string;
  label: string;
  dataList?: Array<string>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export interface FormProps {
  fields: Record<string, FieldInputs>;
  afterSubmit: (data: Record<string, string>) => void;
}

export interface FormData {
  value: string;
  error: string;
}

export interface FormOutput {
  data: Record<string, FormData>;
  fields: Record<string, FieldInputs>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
