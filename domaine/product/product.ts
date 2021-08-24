const getTotalFromQtyUnitPrice = (
  qty: number,
  unitPrice: number,
  nbr: number
): number => qty * unitPrice * nbr;
const getQtyFromTotalUnitPrice = (
  total: number,
  unitPrice: number,
  nbr: number
): number => (nbr * unitPrice) / total;
const getUnitPriceFromTotalQty = (
  total: number,
  qty: number,
  nbr: number
): number => total / qty / nbr;

export const priceTranform = (data: Record<string, string>) => {
  const qty = parseFloat(data.cost_qty) || 0;
  const unitPrice = parseFloat(data.cost_unitPrice) || 0;
  const nbr = parseFloat(data.cost_nbr) || 0;
  const total = parseFloat(data.cost_total) || 0;

  if (qty && unitPrice && nbr) {
    data.cost_total = getTotalFromQtyUnitPrice(qty, unitPrice, nbr).toString();
  } else if (unitPrice && nbr && total) {
    data.cost_qty = getQtyFromTotalUnitPrice(total, unitPrice, nbr).toString();
  } else if (qty && nbr && total) {
    data.cost_unitPrice = getUnitPriceFromTotalQty(total, qty, nbr).toString();
  }
  return data;
};
