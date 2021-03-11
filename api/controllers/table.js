const Table = require('../models/Table')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
	try {
		const table = await Table.find()
		res.status(200).json(table)
	} catch (e) {
		res.status(400).json(e)
	}
}

module.exports.create = async (req, res) => {
	try {
		const allTable = await Table.find()
		console.log('===>allTable.length', allTable.length);
		const table = new Table({
			id: allTable.length,
			vehicle: req.body.vehicle,
			driver: req.body.driver,
			device: req.body.device,
			location: req.body.location,
			totalODO: req.body.totalODO,
		})
		await table.save()
		res.status(201).json(table)
	} catch (e) {
		res.status(400).json(e)
	}
}

module.exports.remove = async (req, res) => {
	try {
		await Table.deleteOne({
			id: req.params.id,
		})
		res.status(200).json({message: 'success removed'})
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.removeAll = async (req, res) => {
	try {
		await Table.deleteOne()
		res.status(200).json({message: 'success removed'})
	} catch (e) {
		errorHandler(res, e)
	}
}
