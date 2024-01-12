import { Children } from "react";
export const EachElement = ({ render, of }: any) =>
  Children.toArray(of.map((item: any, index: number) => render(item, index)));
 