import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap'
import Rating from '../component/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
	const product = products.find(product => product._id === match.params.id)
	console.log(product)
	return (
		<div>
			<Row>
				<Col md={12}>
					<Link className="btn btn-light my-3" to="/">
						<strong>Go Back</strong>
					</Link>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name} </h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={product.rating} text={`${product.numReviews} Reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>
							Price : ${product.price}
						</ListGroup.Item>
						<ListGroup.Item>
							Description : {product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<ListGroup>
						<ListGroup.Item>
							<Row>
								<Col>
									Price:
							</Col>
								<Col>
									${product.price}
								</Col>
							</Row>

						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>
									Status:
							</Col>
								<Col>
									{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
								</Col>
							</Row>

						</ListGroup.Item>
						<ListGroup.Item>
							<Button className="btn btn-dark" block disabled={product.countInStock <= 0}> Add To Cart</Button>
						</ListGroup.Item>

					</ListGroup>
				</Col>
			</Row>
		</div>
	)
}

export default ProductScreen
