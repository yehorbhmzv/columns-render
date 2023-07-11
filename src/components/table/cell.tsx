import React from "react";
import {TableSchemaFieldInterface} from "../../types";

interface Props {
  field: TableSchemaFieldInterface
  value: any
}


const Cell = ({field, value}: Props) => {
  return (
    <td className={`w-[${field.width}px] h-[45px] border-x   px-3 py-3 cursor-pointer hover:bg-gray-600`}>
      {value}
    </td>
  )
}

export default Cell
