import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { connectionString } from '@/lib/mongodb';

export default NextAuth({
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
    redirect: async (url, baseUrl) => (url.startsWith(baseUrl)
      ? Promise.resolve(url)
      : Promise.resolve(baseUrl)),
  },
  providers: [
    Providers.Google({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.MY_RANDOM_AUTH_SECRET,
  jwt: {
    secret: process.env.MY_RANDOM_JWT_SECRET,
  },
  // A database is optional, but required to persist accounts in a database
  database: `${connectionString}/dev_db`,
});
