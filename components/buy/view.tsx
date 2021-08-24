import React from "react";
import { Buy as BuyType } from "@graphql-types@";

import { Localization } from "../localization/localization";
import { Products } from "../product/products";

interface BuyProps {
  buy: BuyType;
}

export const BuyView = ({
  buy: { date, products, localization, total },
}: BuyProps): JSX.Element => (
  <>
    <time>{date}</time>
    <Localization localization={localization} />
    <Products products={products} />
    <span className="total">{total}</span>
  </>
);
