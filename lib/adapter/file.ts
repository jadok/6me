import jsonfile from "jsonfile";
import { join } from "path";

export const read = async (url: string) => jsonfile.readFile(join(url));
export const write = async (url: string, data: any) =>
  jsonfile.writeFile(url, data);
