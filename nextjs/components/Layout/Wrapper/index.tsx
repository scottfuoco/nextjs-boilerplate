import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => (
  <main className="px-2 m-auto max-w-screen-2xl sm:px-0">{children}</main>
);

export default Wrapper;
