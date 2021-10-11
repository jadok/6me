import React, { ChangeEvent } from 'react';

import { FieldInputs } from './form.interface';

interface FieldProps extends FieldInputs {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Field = ({
  className,
  inputProps,
  dataList,
  handleChange,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <label htmlFor={inputProps?.id}></label>
    <input {...inputProps} onChange={handleChange} list={dataList ? `${inputProps?.id}-list` : undefined} />
    {dataList && <datalist id={`${inputProps?.id}-list`}>
      {dataList.map((data) => (
        <option key={data} value={data} />
      ))}
      </datalist>}
  </div>
)
