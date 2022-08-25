const isDev = process.env.NODE_ENV === 'development'

export const mysqlConfig = {
  type: 'mysql',
  host: isDev ? '127.0.0.1' : 'mysql',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'notebook',
  entities: ['dist/**/**.entity.{ts,js}'],
  synchronize: true,
}
