import { Sequelize } from "sequelize-typescript";

export const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123',
    database: 'BLOGCMS',
    models: [__dirname + '/../models']
});