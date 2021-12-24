import React from 'react';
import { Localization as LocalizationType, Coordonate } from '@graphql-types@';

import { FormEngine } from 'domaine/form/form-engine';
import { FieldInputs } from 'domaine/form/form.interface';
import { useForm } from 'domaine/form/use-form';


export const getFields = (localization?: LocalizationType): Record<string, FieldInputs> => ({
  name: { label: "nom", inputProps: { type: 'text', required: true, value: localization?.name} },
  adress: { label: "adresse", inputProps: { type: 'text', required: true, value: (localization?.place as Coordonate)?.adress } },
  city: { label: "ville", inputProps: { type: 'text', required: true, value: (localization?.place as Coordonate)?.city } },
  zipCode: { label: "Code postale", inputProps: { type: 'number', required: true, min: 0, value: (localization?.place as Coordonate)?.zipCode } },
});

export interface LocalizationEditProps {
  afterSubmit: (data: Record<string, string>) => Promise<void>;
  localization?: LocalizationType;
}

export const LocalizationEdit = ({ afterSubmit, localization }: LocalizationEditProps): JSX.Element => {
  const form = useForm({
    fields: getFields(localization),
    afterSubmit,
    resetAfterSubmit: true,
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <FormEngine {...form} />
      <button type="submit">Valider</button>
    </form>
  )
}
