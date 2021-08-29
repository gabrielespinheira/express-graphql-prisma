import 'graphql-import-node'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

import * as typeDefs from '../schema.graphql'

dotenv.config()

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    hello: () => {
      return 'world'
    },
    allUsers: () => {
      return prisma.user.findMany()
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  })
)

app.listen(process.env.APP_PORT || 3000)
