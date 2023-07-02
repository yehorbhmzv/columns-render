export interface ColumnInterface {
  id: string;
  title: string;
  ordinateNo: number;
  type: string;
  width: number;
}

export interface TableSchemaFieldInterface {
  title: string;
  ordinateNo: number;
  type: string;
  width: number;
}

export interface TableSchemaInterface {
  [id: string]: TableSchemaFieldInterface
}


export interface RowInterface {
  id: string;
  [columnId: string]: any;
}

export interface TableDataInterface {
  loading: boolean;
  columns: Array<ColumnInterface>
}


