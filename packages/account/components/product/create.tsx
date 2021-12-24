import React from 'react';
import { ProductsPrefillData } from '@graphql-types@';

import { FieldInputs } from 'domaine/form/form.interface';
import { FormEngine } from 'domaine/form/form-engine';
import { useForm } from 'domaine/form/use-form';

interface ProductInputs {
  prefill?: ProductsPrefillData;
  afterSubmit: (data: Record<string, string>) => Promise<void>;
}

export const getFields = (data?: ProductsPrefillData): Record<string, FieldInputs> => ({
  name: { label: "nom", inputProps: { type: 'text', required: true, } },
  origine: { label: "origine", inputProps: { type: 'text', required: true }, dataList: data?.origine as string[] },
  category: { label: "categorie", inputProps: { type: 'text', required: true }, dataList: data?.category as string[] },
  cost_qty: { label: "Quantité", inputProps: { type: 'number', min: 0.000, step: 0.001 } },
  cost_unitPrice: { label: "Prix unité", inputProps: { type: 'number', min: 0.00, step: 0.001 } },
  cost_nbr: { label: "Nombre", inputProps: { type: 'number', min: 0 } },
  cost_unite: { label: "unité", inputProps: { type: 'text' } },
  cost_total: { label: "Total", inputProps: { type: 'number', min: 0.00, step: 0.001 } },
});

export const CreateProduct = ({
  prefill,
  afterSubmit,
}: ProductInputs): JSX.Element => {
  const form = useForm({
    fields: getFields(prefill), 
    afterSubmit,
    resetAfterSubmit: true,
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <FormEngine {...form} />
      <button type="submit">Ajouter un produit</button>
    </form>
  )
};
