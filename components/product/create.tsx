import React from "react";
import { ProductsPrefillData } from "@graphql-types@";

import { FieldInputs, FormData } from "domaine/form/form.interface";
import { FormEngine } from "domaine/form/form-engine";
import { useForm } from "domaine/form/use-form";

interface ProductInputs {
  prefill?: ProductsPrefillData;
  afterSubmit: (data: Record<string, string>) => Promise<void>;
}

export const getFields = (
  dataPrefill?: ProductsPrefillData
): Record<string, FieldInputs> => ({
  name: {
    label: "nom",
    inputProps: { type: "text", required: true },
    dataList: dataPrefill?.products?.map(
      (product) => product?.name
    ) as string[],
    transform: [
      (
        data: Record<string, FormData>,
        _name: string,
        currrentValue: string
      ) => {
        const prefillProduct = dataPrefill?.products.find(
          (product) => product?.name === currrentValue
        );
        if (!prefillProduct) {
          return data;
        }

        return {
          name: {
            value: prefillProduct.name,
            error: "",
          },
          origine: {
            value: prefillProduct.origine,
            error: "",
          },
          category: {
            value: prefillProduct.category,
            error: "",
          },
          cost_qty: {
            value: prefillProduct.cost?.qty?.toString(),
            error: "",
          },
          cost_unitPrice: {
            value: prefillProduct.cost?.unitPrice?.toString(),
            error: "",
          },
          cost_nbr: {
            value: prefillProduct.cost?.nbr?.toString(),
            error: "",
          },
          cost_unite: {
            value: prefillProduct.cost?.unit?.toString(),
            error: "",
          },
          cost_total: {
            value: prefillProduct.cost?.total?.toString(),
            error: "",
          },
        } as Record<string, FormData>;
      },
    ],
  },
  origine: {
    label: "origine",
    inputProps: { type: "text", required: true },
    dataList: dataPrefill?.origine as string[],
  },
  category: {
    label: "categorie",
    inputProps: { type: "text", required: true },
    dataList: dataPrefill?.category as string[],
  },
  cost_qty: {
    label: "Quantité",
    inputProps: { type: "number", min: 0.0, step: 0.001 },
  },
  cost_unitPrice: {
    label: "Prix unité",
    inputProps: { type: "number", min: 0.0, step: 0.001 },
  },
  cost_nbr: { label: "Nombre", inputProps: { type: "number", min: 0 } },
  cost_unite: { label: "unité", inputProps: { type: "text" } },
  cost_total: {
    label: "Total",
    inputProps: { type: "number", min: 0.0, step: 0.001 },
  },
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
  );
};
