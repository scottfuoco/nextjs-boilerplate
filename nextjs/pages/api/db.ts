import { NextApiRequest, NextApiResponse } from 'next';
import mongodb from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const collections = await mongodb.db('dev_db').listCollections().toArray();
      res.status(200).json({ collections });
    } catch (e) {
      console.error('Error connecting to mongodb');
      res.status(500);
    }
  }
}
