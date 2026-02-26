import { PrismaClient, UserRole } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create default organization
  const organization = await prisma.organization.upsert({
    where: { email: 'admin@laundromatai.com' },
    update: {},
    create: {
      name: 'LaundromatAI HQ',
      email: 'admin@laundromatai.com',
      phone: '08000000000',
      address: '123 AI Street, Lagos, Nigeria',
    },
  })

  // Create default location
  const location = await prisma.location.create({
    data: {
      name: 'Lagos Main Branch',
      address: '45 Victoria Island, Lagos',
      phone: '08011112222',
      organizationId: organization.id,
    },
  })

  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@laundromatai.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@laundromatai.com',
      role: UserRole.ADMIN,
      organizationId: organization.id,
      locationId: location.id,
    },
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
