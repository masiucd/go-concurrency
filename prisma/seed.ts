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
        'die-hard,
        'die-hard'
      ),
       (
        'Inception',
        2010,
        50500,
        5,
        'inception',
        'inception'
      ),
       (
        'Interstellar',
        2014,
        62500,
        5,
        'interstellar',
        'interstellar'
      ),
       (
        'Fight Club',
        1999,
        32500,
        3,
        'fight-club',
        'fight-club'
      ),
       (
        'No Time to Die',
        2021,
        89500,
        5,
        'no-time-to-die',
        'no-time-to-die'
      ),
       (
        'The dark knight',
        2008,
        229500,
        5,
        'the-dark-knight',
        'the-dark-knight'
      ),
       (
        'The Football factory',
        2003,
        29500,
        3,
        'the-football-factory',
        'the-football-factory','
      );
    `
    await prisma.$queryRaw`
    INSERT INTO category (name)
    values
    ('horror'),
    ('drama') ,
    ('comedy') ,
    ('action') ,
    ('adventure') ,
    ('love') ,
    ('real-story') ,
    ('thriller');
    `
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
