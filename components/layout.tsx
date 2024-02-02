import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from '../components/header';
import Main from '../components/main';

export default function Layout() {
  return (
    <div className="relative h-max md:h-screen bg-gray-100 p-4 md:p-10">
      <Header />
      <Main />
    </div>
  );
}