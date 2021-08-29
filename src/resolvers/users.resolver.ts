import { PrismaClient } from '.prisma/client'

export default async function UsersResolver() {
  const prisma = new PrismaClient()

  return await prisma.user.findMany()
}
