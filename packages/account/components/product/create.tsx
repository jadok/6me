import React from 'react';

import { ProductPrefill } from '@graphql-types@';
import { useForm, FormEngine, FieldInputs } from '@6me/form';

interface ProductInputs {
  prefill: ProductPrefill;
  afterSubmit: (data: Record<string, string>) => void;
}

export const getFields = (_data: ProductPrefill): Record<string, FieldInputs> => ({
  name: { label: "nom", inputProps: { type: 'text', required: true } },
  origine: { label: "origine", inputProps: { type: 'text', required: true } },
  category: { label: "categorie", inputProps: { type: 'text', required: true } },
  cost_qte: { label: "Quantité", inputProps: { type: 'number', required: true } },
  cost_unitPrice: { label: "Prix unité", inputProps: { type: 'number', required: true } },
  cost_nbr: { label: "Nombre", inputProps: { type: 'number', required: true } },
  cost_unite: { label: "unité", inputProps: { type: 'text', required: true } },
  cost_total: { label: "Total", inputProps: { type: 'number', required: true } },
});

export const CreateProduct = ({
  prefill,
  afterSubmit,
}: ProductInputs): JSX.Element => {
  const form = useForm({
    fields: getFields(prefill), 
    afterSubmit,
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <FormEngine {...form} />
    </form>
  )
};
