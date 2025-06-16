export interface Column<T> {
  label: string
  accessor: keyof T
  className?: string
  sortable?: boolean
}
