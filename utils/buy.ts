import { Buy } from "@graphql-types@";

export interface DateSpliting {
  [year: number]: {
    total: number;
    months: Record<number, number>;
  };
}

export const splitBuysByDate = (data: Array<Buy>) =>
  data.reduce((acc: DateSpliting, buy) => {
    const dateSplit = buy.date.split("-");
    const year = parseInt(dateSplit[0], 10);
    const month = parseInt(dateSplit[1], 10);

    if (!acc[year]) {
      acc[year] = {
        total: buy.total,
        months: {
          [month]: buy.total,
        },
      };
    } else {
      acc[year].total += buy.total;
      acc[year].months[month] = (acc[year].months[month] || 0) + buy.total;
    }
    return acc;
  }, {});
