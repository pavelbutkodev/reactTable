import React from 'react'
import {useTable} from 'react-table'
import {gql, useQuery} from '@apollo/client';

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


function Table({columns, data}) {
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
  query currencys {
    currencys {
      id,
			vehicle,
			driver,
			device,
			location,
			totalODO
    }
  }
`;

function App() {
	const {loading, error, data: table} = useQuery(GET_ALL);
	console.log('===>loading', loading);
	console.log('===>error', error);
	const allTable = table && table.currencys || [];

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
		],
		[]
	)

	const data = React.useMemo(() => allTable, [allTable])
	return (
		<div>
			<CssBaseline/>
			<Table columns={columns} data={data}/>
		</div>
	)
}

export default App
