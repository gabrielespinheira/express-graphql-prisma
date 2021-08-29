import { PrismaClient } from '.prisma/client'

export default function UsersResolver() {
  const prisma = new PrismaClient()

  return prisma.user.findMany()
}
