import React, { useState } from "react";
import {
  Buy as BuyType,
  Product,
  Localization as LocalizationType,
  ProductsPrefillData,
} from "@graphql-types@";

import { Localization } from "../localization/localization";
import { Products } from "../product/products";
import { priceTranform } from "domaine/product/product";
import { ViewMode } from "components/interface";
import { CreateProduct } from "components/product/create";
import { FieldInputs } from "domaine/form/form.interface";
import { FormEngine } from "domaine/form/form-engine";
import { useForm } from "domaine/form/use-form";

interface BuyProps {
  buyData?: BuyType;
  prefill?: ProductsPrefillData;
  addBuy: (buy: Partial<BuyType>) => Promise<void>;
}

export const defaultBuy = {
  products: [],
  date: "",
};

export const getFields = (): Record<string, FieldInputs> => ({
  date: { label: "date", inputProps: { type: "date", required: true } },
});

export const BuyEdit = ({
  buyData,
  prefill,
  addBuy,
}: BuyProps): JSX.Element => {
  const [buy, setBuy] = useState<Partial<BuyType>>(buyData || defaultBuy);
  const afterSubmitProducts = (data: Record<string, string>) => {
    priceTranform(data);
    const product: Product = {
      name: data.name,
      origine: data.origine,
      category: data.category,
      cost: {
        unitPrice: parseFloat(data.cost_unitPrice),
        nbr: parseInt(data.cost_nbr, 10),
        qty: parseFloat(data.cost_qty),
        unit: data.cost_unite,
        total: parseFloat(data.cost_total),
      },
    };
    const newProducts = [...(buy.products as Product[])];
    newProducts.push(product);
    setBuy({ ...buy, products: newProducts });
    return Promise.resolve();
  };
  const afterSubmitLocalization = (data: Record<string, string>) => {
    const localization: LocalizationType = {
      name: data.name,
      place: {
        zipCode: data.zipCode,
        adress: data.adress,
        city: data.city,
      },
    };

    setBuy({ ...buy, localization });

    return Promise.resolve();
  };

  const afterSubmit = (data: Record<string, string>) => {
    const buyFinal = { ...buy, date: data.date };
    return addBuy(buyFinal).then(() => {
      if (!buyData) {
        setBuy(defaultBuy);
      }
    });
  };

  const deleteProduct = (id: number) => {
    const newProducts = [...(buy.products as Product[])];
    newProducts.splice(id, 1);
    setBuy({ ...buy, products: newProducts });
  };

  const formDate = useForm({
    fields: getFields(),
    afterSubmit,
    resetAfterSubmit: true,
  });
  return (
    <>
      <Localization
        localization={buy.localization}
        afterSubmit={afterSubmitLocalization}
        defaultViewMode={ViewMode.EDIT}
        prefill={prefill}
      />
      <h2>Products</h2>
      <div className="products-add">
        <ul className="buy">
          <Products products={buy.products as Product[]} deleteProduct={deleteProduct} />
        </ul>
        <CreateProduct afterSubmit={afterSubmitProducts} prefill={prefill} />
      </div>
      <form onSubmit={formDate.handleSubmit}>
        <FormEngine {...formDate} />
        <button type="submit">Ajouter la commande</button>
      </form>
    </>
  );
};
