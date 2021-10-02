/* eslint-disable no-console */
import prisma from "../lib/prisma"

export async function main() {
  try {
    await prisma.$queryRaw`
    INSERT INTO movie ( title, releaseYear, price, rating,image,slug)
      values (
        'Die hard',
        1998,
        20500,
        4,
        'die-hard.svg',
        'die-hard'
      ),
       (
        'Inception',
        2010,
        50500,
        5,
        'inception.svg',
        'inception'
      ),
       (
        'Interstellar',
        2014,
        62500,
        5,
        'interstellar.svg',
        'interstellar'
      ),
       (
        'Fight Club',
        1999,
        32500,
        3,
        'fight-club.svg',
        'fight-club'
      ),
       (
        'No Time to Die',
        2021,
        89500,
        5,
        'no-time-to-die.svg',
        'no-time-to-die'
      );

      INSERT INTO category (name, movies)
      values(
        'horror'
          
      );
    `
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
