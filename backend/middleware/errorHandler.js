const notFound = (req, res, next) => {

	// THROW ERROR OF PAGE NOT FOUND
	const error = new Error(`Not Found- ${req.originalUrl}`)
	res.status(404)
	next(error)
}

/**
 *  Custom error handler for handling errors 
 *  we get from services 
 *  for example not formated id on mongodb 
 *  it will catch all the errors   
 */

const errorHandler = (err, req, res, next) => {

	// SET DEFAULT ERROR STATUS CODE TO 500
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)

	// SET MESSAGE AND (STACK TRACE FOR DEVELOPMENT MODE ONLY)
	res.json({
		message: err.message,
		stack: process.env.NOE_ENV === 'production' ? null : err.stack
	})

}

export { errorHandler, notFound }