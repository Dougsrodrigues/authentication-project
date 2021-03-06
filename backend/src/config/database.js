require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'authentication',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
