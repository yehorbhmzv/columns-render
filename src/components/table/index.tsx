import React, {useState} from 'react'
import {HiSearch} from "react-icons/hi";
import {TableSchemaInterface} from "../../types";
import Cell from "./cell";

interface Props {
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
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 ">
          <HiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
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

const TableHead = ({schema}: Props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      {Object.keys(schema).map((key) => <th scope="col" key={key} className="px-3 py-4">{schema[key]?.title}</th>)}
    </tr>
    </thead>
  )
}

const TableBody = ({rows, schema}: Props) => {
  return (
    <tbody className='overflow-auto h-auto max-h-full'>
    {Object.keys(rows).map((itemId) =>
      <tr key={itemId} className="min-h-[45px] border-b bg-gray-800 border-gray-700">
        {Object.keys(schema).map((fieldId) => {
          const value = rows[itemId][fieldId]
          const field = schema[fieldId]
          const key = `${itemId}-${fieldId}`
          return <Cell key={key} field={field} value={value}/>
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

      <table className="w-full text-sm text-left text-gray-400">
        <TableHead {...props}/>
        <TableBody {...props}/>
      </table>
    </div>)
}

export default Table;
