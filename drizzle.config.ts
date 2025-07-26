import type { Config } from 'drizzle-kit'
import { databaseConfig } from './config/database'

export default {
  schema: './src/lib/db/schema/*.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: databaseConfig.host,
    port: databaseConfig.port,
    user: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.database,
    ssl: databaseConfig.ssl,
  },
  verbose: true,
  strict: true,
} satisfies Config