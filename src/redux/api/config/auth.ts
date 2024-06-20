import type { ConfigFile } from '@rtk-query/codegen-openapi'
import { tag } from './rtkConfig'

const config: ConfigFile = {
  schemaFile: 'http://localhost:8000/openapi.json',
  apiFile: '../api.ts',
  apiImport: 'api',
  outputFile: '../authApi.ts',
  flattenArg: true,
  hooks: { queries: true, lazyQueries: true, mutations: true },
  filterEndpoints: tag(/auth/i),
}

export default config
