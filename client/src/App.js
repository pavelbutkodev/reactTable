import React from 'react'
import { useTable } from 'react-table'

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


function App() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'idid',
				accessor: 'idid',
			},
		],
		[]
	)

	const data = React.useMemo(() => [{id: 'oleg', idid: "ogggg"}, {id: 'oleg', idid: "ogggg"}, {
		id: 'oleg',
		idid: "ogggg"
	}, {id: 'oleg', idid: "ogggg"}, {id: 'oleg', idid: "ogggg"}], [])

	return (
		<div>
			<CssBaseline/>
			<Table columns={columns} data={data}/>
		</div>
	)
}

export default App
