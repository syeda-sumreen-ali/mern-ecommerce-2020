import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

// @desc	Get All products
// @route  /api/product
// @access  Public

router.get('/', asyncHandler(async (req, res) => {
	const products = await Product.find({}) //return everything
	res.json(products)
}))

// @desc	Get single products
// @route  /api/product/:id
// @access  Public

router.get('/:id', asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)
	res.json(product)
}))


export default router