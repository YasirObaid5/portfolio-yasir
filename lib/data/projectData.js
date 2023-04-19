import React, { useState } from "react";
import Button from '../../components/Button'



const ProjectData = () => {
  const [loading, setLoading] = useState(false);

  const downloadJson = async () => {
    setLoading(true);
    const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22project%22%5D`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'projects-data.json';
    link.click();
    URL.revokeObjectURL(url);
    setLoading(false);
  };

  return (
    <div className="cursor-pointer h-17 w-17 rounded-full "> 
    <div className={` mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
    text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
    hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100 `}
    
    >
    <button onClick={downloadJson} disabled={loading}>
      {loading ? 'Downloading...' : 'Download JSON'}
    </button>
    </div>
    </div>
  );
};

export default ProjectData;