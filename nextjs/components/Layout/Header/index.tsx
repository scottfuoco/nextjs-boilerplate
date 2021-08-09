import Link from 'next/link';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LoginBtn from './components/LoginBtn';

const navItems: {text: string, href: string}[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Dashboard',
    href: '/dashboard',
  },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="mb-4">
      <nav className="bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0 text-white">
                NextJS Starter
              </div>
              <div className="hidden md:flex md:justify-between md:w-full">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navItems.map(({ text, href }) => (
                    <Link href={href} key={text}>
                      <a
                        className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700"
                      >
                        {text}
                      </a>
                    </Link>
                  ))}
                </div>
                <LoginBtn />
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose /> }
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map(({ text, href }) => (
                  <Link href={href} key={text}>
                    <a
                      className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      {text}
                    </a>
                  </Link>
                ))}
                <div className="px-3 py-2 ">
                  <LoginBtn />
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
}

export default Nav;
