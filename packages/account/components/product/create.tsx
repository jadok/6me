import React from 'react';

import { ProduitPrefill } from '@graphql-types@';
import { FieldInputs } from 'domain/form/form.interface';
import { useForm } from 'domain/form/use-form';
import { FormMotor } from 'domain/form/form-moteur';

interface ProduitInputs {
  prefill: ProduitPrefill;
  afterSubmit: (data: Record<string, string>) => void;
}

export const getFields = (_data: ProduitPrefill): Record<string, FieldInputs> => ({
  nom: { label: "nom", inputProps: { type: 'text', required: true } },
  origine: { label: "origine", inputProps: { type: 'text', required: true } },
  categorie: { label: "categorie", inputProps: { type: 'text', required: true } },
  cout_qte: { label: "Quantité", inputProps: { type: 'number', required: true } },
  cout_prix_unite: { label: "Prix unité", inputProps: { type: 'number', required: true } },
  cout_nbr: { label: "Nombre", inputProps: { type: 'number', required: true } },
  cout_unite: { label: "unité", inputProps: { type: 'text', required: true } },
  cout_total: { label: "Total", inputProps: { type: 'number', required: true } },
});

export const CreateProduit = ({
  prefill,
  afterSubmit,
}: ProduitInputs): JSX.Element => {
  const form = useForm({
    fields: getFields(prefill), 
    afterSubmit,
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <FormMotor {...form} />
    </form>
  )
};
