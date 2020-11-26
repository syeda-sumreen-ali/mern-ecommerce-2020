import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	isAdmin: {
		type: String,
		required: true,
		default: false
	}

}, {
	timstamps: true
})

const User = mongoose.model('User', userSchema)
export default User