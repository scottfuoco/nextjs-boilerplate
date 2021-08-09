import { signIn, signOut, useSession } from 'next-auth/client';

const LoginBtn = ({}) => {
  const [session] = useSession();
  return (
    <>
      { !session
        ? <button type="button" className="text-white" onClick={() => signIn(null, { callbackUrl: '/dashboard' })}>Login/SignUp</button>
        : <button type="button" className="text-white" onClick={signOut}>Logout</button>}
    </>
  );
};

export default LoginBtn;
