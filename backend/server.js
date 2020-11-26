// const express = require('express')
// const products = require('./data/products')
// const dotenv = require('dotenv')
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'
import productRoutes from './route/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

//IMPORT ALL ROUTES
app.use('/api/products', productRoutes)
//
// app.get('/api/product/:id', (req, res) => {
// 	const product = products.find(p => p._id === req.params.id)
// 	res.json(product)
// })


// IMPORT MIDDLEWARE
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))