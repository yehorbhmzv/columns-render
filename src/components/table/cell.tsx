import React from "react";
import {ColumnInterface, TableSchemaFieldInterface} from "../../types";

interface Props {
  column: TableSchemaFieldInterface
  value: any
}




const Cell = ({column, value}: Props) => {
  return (<td className={`px-6 py-3 w-[${column.width}px]`}>{value}</td>)
}

export default Cell
