
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      this is home page
     <div className='flex gap-4 underline text-xl'>
     <Link href='/post'>Post</Link>
      <Link href='/users'>Users</Link>
     </div>
    </div>
  );
};

export default HomePage;