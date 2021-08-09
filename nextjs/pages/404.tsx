import { ImSad2 } from 'react-icons/im';

const NotFound = ({}) => (
  <span className="flex justify-center gap-2">
    Hrmmm, this page doesn&apos;t seen to exist
    <ImSad2 className="text-2xl" style={{ fill: 'blue' }} />
  </span>
);

export default NotFound;
