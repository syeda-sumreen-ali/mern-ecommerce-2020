
import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10), //password 123456 , rounds 10
		isAdmin: true
	},
	{
		name: 'john Doe',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 10), //password 123456 , rounds 10
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 10), //password 123456 , rounds 10

	},
]

export default users