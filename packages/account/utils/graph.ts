export const dataToPieData = (data: Record<string, number>) => Object.keys(data).map((fieldName: string) => ({
  x: fieldName,
  y: data[fieldName]
}));
