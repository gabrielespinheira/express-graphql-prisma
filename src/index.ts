import 'graphql-import-node'
import dotenv from 'dotenv'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

import * as typeDefs from '../schema.graphql'
import resolvers from './resolvers/index'

dotenv.config()

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' && true,
  })
)

app.listen(process.env.APP_PORT || 3000)
