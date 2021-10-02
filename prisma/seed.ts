/* eslint-disable no-console */
import prisma from "../lib/prisma"

export async function main() {
  try {
    const result = await prisma.$queryRaw`
    INSERT INTO movie ( title, releaseYear, price, rating,image,slug)
      values (
        'Die hard',
        1998,
        20500,
        4,
        'die-hard-svg',
        'die-hard'
      );
    `
    console.log(result)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
