import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the target directory
        router.push('/anime');
    }, [router]);

    return (
        <div>
            Redirecting to anime section...
            {/* Optionally, include a loading spinner here */}
        </div>
    );
};

export default HomePage;
