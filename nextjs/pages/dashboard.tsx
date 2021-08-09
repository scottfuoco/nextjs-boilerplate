import { useSession } from 'next-auth/client';
import AccessDenied from '@/components/AccessDenied';
import Spinner from '@/components/Spinner';

const Dashboard = () => {
  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return <Spinner />;
  if (!session) { return <AccessDenied />; }

  return (
    <>
      Dashboard!
    </>
  );
};

export default Dashboard;
