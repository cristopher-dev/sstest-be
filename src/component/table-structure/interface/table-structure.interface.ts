export interface ITableType {
  id: number;
  name: string;
}

export interface ITableStructure {
  id: number;
  TableTypeId: string;
  header: string;
  dataType: string | number;
  format: string;
  required: boolean;
}
