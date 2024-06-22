// pages/index.jsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/anime');
  }, []);

  // This component doesn't need to render anything since it immediately redirects
  return null;
}

export async function getServerSideProps() {
  // Optional: You can add server-side logic here if needed
  return {
    props: {}, // Required for getServerSideProps
  };
}
