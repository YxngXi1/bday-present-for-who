'use client'

import { useEffect, useState } from 'react';

export default function HeartCounter() {
  const [count, setCount] = useState('...');

  // Fetch the counter value on load
  useEffect(() => {
    const fetchCount = async () => {
      const response = await fetch('/api/counter'); // Correct absolute path
      const data = await response.json();
      
      // Ensure we handle the expected structure of the API response
      if (data.count !== undefined) {
        setCount(data.count);  // Update the count
      } else {
        console.error('Error: count not found in response', data);
      }
    };
    fetchCount();
  }, []);

  // Handle increment
  const incrementCount = async () => {
    const response = await fetch('/api/counter', {
      method: 'POST',
    });
    const data = await response.json();
    
    // Update the count after increment
    if (data.count !== undefined) {
      setCount(data.count);  // Update the count
    } else {
      console.error('Error: count not found in response after increment', data);
    }
  };

  return (
    <div className="flex justify-end items-center w-52">
        <div onClick={incrementCount} className='prevent-select cursor-pointer p-2 w-1/2'>
            <p className='heart'>❤️</p>
        </div>
        <p className=' w-1/2 text-white title'>{count}</p>
    </div>
  );
}