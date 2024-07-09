import type { ConfigFile } from '@rtk-query/codegen-openapi'
import { tag } from './rtkConfig'

const config: ConfigFile = {
  schemaFile: 'http://localhost:8000/openapi.json',
  apiFile: '../api.ts',
  apiImport: 'api',
  outputFile: '../adminApi.ts',
  hooks: { queries: true, lazyQueries: true, mutations: true },
  filterEndpoints: tag(/admin/i),
  flattenArg: true,
  useEnumType: true
}

export default config
