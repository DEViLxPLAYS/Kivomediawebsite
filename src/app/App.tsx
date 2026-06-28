import { RouterProvider } from 'react-router';
import { router } from '@/app/routes';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading screen stays until content is ready (max ~2.2s)
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <RouterProvider router={router} />
    </>
  );
}
