import React, { useState } from 'react';
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faStar, faCode } from '@fortawesome/free-solid-svg-icons';
const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
};
const CodeIcon = {
  icon: <FontAwesomeIcon icon={faCode}/>,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' }
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }
};
const timeline = [
    { icon: CodeIcon, date: 'April 2021 - present', title: 'Self-taught programmer', subtitle: 'Frontend developer', desc: ' React.js, HTML, CSS, JavaScript, and Headless CMS' },
    { icon: CodeIcon, date: 'April 2021 - present', title: 'Self-taught programmer', subtitle: 'Frontend developer', desc: ' React.js, HTML, CSS, JavaScript, and Headless CMS' },
    { icon: workIcon, date: '2006 - present', title: 'Head of Livestock Reproduction Research Section', subtitle: '', desc: '(Livestock Production Research Centre) Directorate General of Agriculture & Livestock Research, Ministry of Agriculture, Sultanate of Oman. ' },
    { icon: workIcon, date: '2000 - 2006', title: 'Animal Production specialist ', subtitle: 'San Francisco, CA', desc: '(Rangeland department) General Directorate of Animal Production, Ministry of Agriculture and Fisheries. ' },
    { icon: schoolIcon, date: '2002 - 2005', title: '•	Master of Animal Sciences ', subtitle: 'Master Degree, MSc', desc: 'Peoples Friendship University of Russia in ,2005.' },
    { icon: schoolIcon, date: '1994-1999', title: '•	Bachelor of Sciences (Animal Sciences)', subtitle: 'Bachelor Degree, BSc', desc: 'Sultan Qaboos University, Oman, 1999.' },
    { icon: starIcon }
  ];
const AboutData = (Url) => {
  const [loading, setLoading] = useState(false);
  
  const downloadJson = async () => {
    setLoading(true);
    const apiUrl = (timeline)
    const response = await fetch(apiUrl);
    const data = await response.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'about-data.json';
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

export default AboutData;