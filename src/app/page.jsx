// pages/index.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/anime');
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default HomePage;
