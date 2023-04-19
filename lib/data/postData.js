import React, { useState } from 'react';
import Button from '../../components/Button'
const PostData = (Url) => {
  const [loading, setLoading] = useState(false);

  const downloadJson = async () => {
    setLoading(true);
    const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sanity-data.json';
    link.click();
    URL.revokeObjectURL(url);
    setLoading(false);
  };

  return (
    <Button onClick={downloadJson}
     disabled={loading}
     >
      {loading ? 'Downloading...' : 'Download JSON'}
    </Button>
  );
};

export default PostData;