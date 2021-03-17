import React, { useEffect } from 'react'
import {useTable} from 'react-table'
import {gql, useMutation, useQuery} from '@apollo/client';

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { observer } from "mobx-react"
import newStore from "./store"

const Table = ({columns, data}) => {
	const {getTableProps, headerGroups, rows, prepareRow} = useTable({
		columns,
		data,
	})

	return (
		<MaUTable {...getTableProps()}>
			<TableHead>
				{headerGroups.map(headerGroup => (
					<TableRow {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<TableCell {...column.getHeaderProps()}>
								{column.render('Header')}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableHead>
			<TableBody>
				{rows.map((row, i) => {
					prepareRow(row)
					return (
						<TableRow {...row.getRowProps()}>
							{row.cells.map(cell => {
								return (
									<TableCell {...cell.getCellProps()}>
										{cell.render('Cell')}
									</TableCell>
								)
							})}
						</TableRow>
					)
				})}
			</TableBody>
		</MaUTable>
	)
}

const GET_ALL = gql`
  query getTables {
    getTables {
      id,
			vehicle,
			driver,
			device,
			location,
			totalODO
    }
  }
`;

const REMOVE_TABLE = gql`
	mutation removeTable($id: Id){
		removeTables(id: $id){
			id
		}
	}
`;

const App = observer(props => {
	console.log('========>Store',newStore.secondsPassed);
	const {loading, error, data: table} = useQuery(GET_ALL);
	const [removeTables] = useMutation(REMOVE_TABLE)
	console.log('========>removeTables',removeTables);
	useEffect(() => {
		removeTables({ variables: { id: '2' }})
	}, [])

	const allTable = table && table.getTables || [];

	const columns = React.useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'Vehicle',
				accessor: 'vehicle',
			},
			{
				Header: 'Driver',
				accessor: 'driver',
			},
			{
				Header: 'Device',
				accessor: 'device',
			},
			{
				Header: 'Location',
				accessor: 'location',
			},
			{
				Header: 'Total ODO',
				accessor: 'totalODO',
			},
			{
				Header: 'Remove',
				Cell: ({ row }) => {
					return <div onClick={() => handleDelete(row.id)}>удалить</div>
				},
				id: "remove"
			}
		],
		[]
	)

	const handleDelete = id => {
		console.log('========>id',id);

	}

	const data = React.useMemo(() => allTable, [allTable])
	return (
		<div>
			<CssBaseline/>
			<Table columns={columns} data={data}/>
		</div>
	)
})

export default App
