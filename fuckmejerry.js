const Client = require('discord.js').Client;
const Auth = require('./token.js');

const music = require('discord.js-music');

// Create a new client.
const client = new Client();

// Apply the music plugin.
music(client, {
	prefix: '-',     // Prefix of '-'.
	global: true,   // Server-specific queues.
	maxQueueSize: 20 // Maximum queue size of 10.
});

// Login.
client.login(Auth.logintoken);