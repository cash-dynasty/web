import type { ConfigFile } from '@rtk-query/codegen-openapi'
import { tag } from './rtkConfig.ts'

const config: ConfigFile = {
  schemaFile: 'http://localhost:8000/openapi.json',
  apiFile: '../api.ts',
  apiImport: 'api',
  outputFile: '../userApi.ts',
  hooks: { queries: true, lazyQueries: true, mutations: true },
  filterEndpoints: tag(/user/i),
}

export default config
