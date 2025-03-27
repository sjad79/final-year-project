import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { Store } from '../utils/Store';
import React, { useContext, useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import Cookies from 'js-cookie';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/outline';

export default function Layout({ title, children }) {
  //status shows loading of session
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);

  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - Muses' : 'Muses'}</title>
        <meta name="description" content="Group 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Muses</a>
            </Link>

            <div>
              <Link href="/about">
                <a className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                  About
                </a>
              </Link>
              <Link href="/cart">
                <a className="px-4 text-sm font-medium text-blue-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                  <ShoppingCartIcon className="h-6 w-8 inline-block" />
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-purple-700 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {/*show loading msg*/}
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className=" text-base font-bold">
                    <UserCircleIcon className="h-6 w-8 inline-block" />{' '}
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Prodile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/luckydraw">
                        Lucky Draw
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-50 px-4">{children}</main>

        <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
          <div className="container py-6">
            <hr className="h-px mt-6 border-gray-300 dark:bg-gray-700" />
            <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
              <div>
                <Link href="/">
                  <a className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                    Muses
                  </a>
                </Link>
              </div>

              <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                  <Link href="/about">
                    <a className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                      About
                    </a>
                  </Link>
                  <Link href="/cart">
                    <a className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                      Cart
                    </a>
                  </Link>
                  <Link href="/luckydraw">
                    <a className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                      Lucky Draw
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
