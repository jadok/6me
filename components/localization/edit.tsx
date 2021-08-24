import React from "react";
import {
  Localization as LocalizationType,
  Coordonate,
  ProductsPrefillData,
} from "@graphql-types@";

import { FormEngine } from "domaine/form/form-engine";
import { FieldInputs, FormData } from "domaine/form/form.interface";
import { useForm } from "domaine/form/use-form";

export const getFields = (
  localization?: LocalizationType,
  dataPrefill?: ProductsPrefillData
): Record<string, FieldInputs> => ({
  name: {
    label: "nom",
    inputProps: { type: "text", required: true, value: localization?.name },
    dataList: (dataPrefill?.localizations || []).map(
      (localization) => localization?.name
    ) as string[],
    transform: [
      (
        data: Record<string, FormData>,
        _name: string,
        currrentValue: string
      ) => {
        const prefillLocalization = dataPrefill?.localizations.find(
          (localization) => localization?.name === currrentValue
        );
        if (!prefillLocalization) {
          return data;
        }
        return {
          name: {
            value: currrentValue,
            error: "",
          },
          adress: {
            value: (prefillLocalization?.place as Coordonate)?.adress,
            error: "",
          },
          city: {
            value: (prefillLocalization?.place as Coordonate)?.city,
            error: "",
          },
          zipCode: {
            value: (prefillLocalization?.place as Coordonate)?.zipCode,
            error: "",
          },
        } as Record<string, FormData>;
      },
    ],
  },
  adress: {
    label: "adresse",
    inputProps: {
      type: "text",
      required: true,
      value: (localization?.place as Coordonate)?.adress,
    },
  },
  city: {
    label: "ville",
    inputProps: {
      type: "text",
      required: true,
      value: (localization?.place as Coordonate)?.city,
    },
  },
  zipCode: {
    label: "Code postale",
    inputProps: {
      type: "number",
      required: true,
      min: 0,
      value: (localization?.place as Coordonate)?.zipCode,
    },
  },
});

export interface LocalizationEditProps {
  afterSubmit: (data: Record<string, string>) => Promise<void>;
  localization?: LocalizationType;
  dataPrefill?: ProductsPrefillData;
}

export const LocalizationForm = ({
  afterSubmit,
  localization,
  dataPrefill,
}: LocalizationEditProps): JSX.Element => {
  const form = useForm({
    fields: getFields(localization, dataPrefill),
    afterSubmit,
    resetAfterSubmit: true,
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <FormEngine {...form} />
      <button type="submit">Valider</button>
    </form>
  );
};
