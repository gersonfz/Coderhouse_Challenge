const dotenv = require('dotenv');
const yargs = require('yargs')

dotenv.config();

const args = yargs(process.argv.slice(2))
    .default({
        port: 8080
    })
    .alias({
        p: 'port'
    }).argv

const ENV_CONFIG_PROCESS = {
    PORT: args.port,
    MONGO_URI: process.env.MONGO_URI,
    DATASOURCE: process.env.DATASOURCE
};

module.exports = ENV_CONFIG_PROCESS;