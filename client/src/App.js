import React from 'react'
import {useTable} from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import {observer} from "mobx-react"
import newStore from "./store"

import './App.css';

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

const App = observer(props => {
	const changeImg = "https://img2.freepng.ru/20180920/gof/kisspng-computer-icons-editing-portable-network-graphics-i-edit-profile-svg-png-icon-free-download-194863-5ba34579aa7087.1111242415374268096981.jpg";
	const delImg = "https://img1.freepng.ru/20180329/jhe/kisspng-computer-icons-icon-design-delete-button-5abcecfecca525.3779395215223308788382.jpg";

	const table = newStore.tables;

	const handleDelete = id => {
		newStore.delete(id);
	}

	const handleChange = id => {
		newStore.change();
	}

	const allTable = table || [];

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
				Cell: ({row}) => {
					return <div onClick={() => handleDelete(row.values.id)}><img className="logo" src={delImg} alt="delete"/>
					</div>
				},
				id: "remove"
			},
			{
				Header: 'Change',
				Cell: ({row}) => {
					return <div onClick={() => handleChange(row.values.id)}><img className="logo" src={changeImg} alt="change"/>
					</div>
				},
				id: "change"
			}
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
)

export default App
