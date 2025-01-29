import { Sequelize } from 'sequelize';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;
console.log('connectionString', connectionString);
const sequelize = new Sequelize(connectionString);

export default sequelize;
