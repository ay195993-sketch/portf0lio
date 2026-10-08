import { sql } from 'drizzle-orm';
import type { RequestHandler } from 'express';
import { db } from '../db/index.js';

export const getHealth: RequestHandler = async (_req, res) => {
  await db.execute(sql`select 1`);
  res.json({ status: 'ok' });
};
