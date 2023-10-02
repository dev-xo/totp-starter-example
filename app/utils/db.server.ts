import { PrismaClient } from '@prisma/client'
import { singleton } from '~/utils/misc.server.ts'

const prisma = singleton('prisma', () => new PrismaClient())
prisma.$connect()

export { prisma }
