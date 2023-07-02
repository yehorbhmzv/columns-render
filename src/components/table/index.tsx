import React, {useState} from 'react'
import {ColumnInterface, TableSchemaInterface} from "../../types";
import Cell from "./cell";

interface Props {
  columns: Array<ColumnInterface>
  rows: any
  schema: TableSchemaInterface
}

interface SearchProps {
  search: string;
  onChange: (e: any) => void
}

const TableSearch = ({search, onChange}: SearchProps) => {
  return (
    <div className="pb-4 bg-white dark:bg-gray-900">
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative p-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
        </div>
        <input
          type="text" id="table-search"
          onChange={onChange}
          value={search}
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items"/>
      </div>
    </div>
  )
}

const TableHead = ({columns}: Props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    {columns.map((col) => <th scope="col" className="px-3 py-4">{col.title}</th>)}
    </thead>
  )
}

const TableBody = ({rows, columns, schema}: Props) => {
  const cells = columns.map(col => col.id)
  const width = columns.map(col => col.width)
  console.log(schema);

  return (
    <tbody className='overflow-auto h-auto max-h-full'>
    {Object.keys(rows).map((key) =>
      <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {Object.keys(schema).map((column) => {
          const value = rows[key][column]
          return <Cell column={schema[column]} value={value}/>
        })}
      </tr>)}
    </tbody>
  )
}

const Table = (props: Props) => {
  const [search, setSearch] = useState('')
  return (
    <div className="relative overflow-x-auto shadow-md">
      <TableSearch search={search} onChange={(e) => {
        setSearch(e.target.val)
      }}/>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead {...props}/>
        <TableBody {...props}/>
      </table>
    </div>)
}

export default Table;
