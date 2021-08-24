import { ChangeEvent, InputHTMLAttributes } from "react";

type TransformFunction = (
  _data: Record<string, FormData>,
  name: string,
  currrentValue: string
) => Record<string, FormData>;

export interface FieldInputs {
  className?: string;
  label: string;
  dataList?: Array<string>;
  transform?: TransformFunction[];
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export interface FormProps {
  fields: Record<string, FieldInputs>;
  afterSubmit: (data: Record<string, string>) => Promise<void>;
  resetAfterSubmit?: boolean;
}

export interface FormData {
  value: string;
  error: string;
}

export interface FormOutput {
  data: Record<string, FormData>;
  fields: Record<string, FieldInputs>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
