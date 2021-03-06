'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Guild Schema
 */
var GuildSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Guild name',
		trim: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Guild', GuildSchema);
