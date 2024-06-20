import { EndpointMatcherFunction } from '@rtk-query/codegen-openapi/lib/types'

export const tag = (pattern: RegExp): EndpointMatcherFunction => {
  return (operationName, operationDefinition) => {
    const tags = operationDefinition?.operation?.tags?.join(',')
    return pattern.test(tags ?? '')
  }
}
