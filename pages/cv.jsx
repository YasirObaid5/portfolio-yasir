import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import DownloadPdf from '../components/downloadPdf';
import Yasir from '../public/assets/yasir.png'
const CV = () => {
  return (
    <>
    <div className=''>

      <Head>
      <h1 className='text-center font-bold '>
        <title className='text-center font-bold'>Curriculum Vitae</title>
        </h1>
        <link rel='icon' href='/fav.png' />
      </Head>
      <div>
      <DownloadPdf rootElementId="page" downloadFileName="Curriculum Vitae"/>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]' >
        <div>
         
        <h1 className='text-center font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100' 
        >
           <DownloadPdf rootElementId="page" downloadFileName="resume"/>  
           </h1>
           
      <div id="page">     
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <div  class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <Image
           className="w-24 h-24 rounded-full mx-auto"
           src={Yasir}
          lat=""
          width= {200}
          height={200}/>
        </div>

          <h1 className='text-center font-bold italic'>Yasir Al-Shukaili Curriculum Vitae</h1>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/yasir-al-shukaili-2808b428/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/YasirObaid5'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
          
        </div>
        
        
        <p class="text-justify">
        With over 23 years of experience in animal sciences and livestock reproduction research, I hold a Bachelor's from Sultan Qaboos University, Oman, and a Master's from Peoples' Friendship University of Russia. As Head of Livestock Reproduction Research Section at the Directorate General of Agriculture & Livestock Research, Oman, I manage tasks like cattle semen production, storage, distribution, and the annual artificial insemination program. I frequently attend meetings, conferences, and workshops to stay current with advancements in the field. In the last 2 years, I've also become a self-taught developer proficient in HTML, CSS, and JavaScript, with a focus on React.js. This unique skill set allows me to tackle challenges with innovative programming technology and a fresh perspective.
        </p>
        {/* Personal Information’s */}
        
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h5 className='text-center text-[18px] py-2 font-bold italic'>
          
          Personal Information’s:  
          </h5>
        </div>
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
          Full Name: 	Yasir Obaid Thani Al-Shukaili 
 

          </li>
          <li>
          Nationality  :Omani 
          </li>
          <li>
          Date of Birth :10/8/1975 
          </li>
          <li>
          Passport No: 3932286 (issued at Muscat on 15.05.2016) 
          </li>
          <li>
          Marital Status: Married 
          </li>
          <li>
          Current position: Head of Livestock Reproduction Research Section
          </li>
          <li>
          Institution: Livestock Production Research Centre, Directorate General of Agriculture & Livestock Research, Ministry of Agriculture, Fisheries and Water Resource, Sultanate of Oman.
          </li>
          <li>
          Languages: 	Arabic: (writing and speaking),   English: (writing and speaking), Russian: (writing and speaking). 
          </li>
          <li>
          Address: 	Yasir Obaid Al shakaili, P.O.Box: B5209 - PC: 900, Seeb, Sultanate of Oman 
          </li>
          <li>
             
Email:	 Main:  a.y9114@gmail.com
Alternative:   yasir.obaid5@hotmail.com


          </li>
        </ul>
        </div>
      
        {/* Skills */}
        <div className='text-center py-4'>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h5 className='text-center text-[18px] py-2 font-bold italic'>Skills</h5>
          </div>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Animal Reproduction Specialists 
            <span className='px-2'>|</span>Cattle semen processing and freezing 
            <span className='px-2'>|</span>Cattle artificial insemination
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Sanity.io
            <span className='px-2'>|</span> RESTAPI
          </p>
         
        </div>

        {/* <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5> */}
        {/* Experience */}
        <div className='py-6'>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <p className='italic'>
            <span className='font-bold italic'>
            Education & Qualifications 
            </span>
           
          </p>
         </div>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Master of Animal Sciences (major on Animal Husbandry), MSc, The theses on The Characteristic of Romney Sheep's Breed on Genetic Markers" Peoples' Friendship University of Russia in ,2005. 
             
            </li>
            <li>
            Bachelor of Sciences (Animal Sciences), BSc, Sultan Qaboos University, Oman, 1999.
            </li>
            <li>
            High School Degree (12 Years Program), Saif bin Sultan School, Ibri, Oman, 1993. 
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <p className='italic'>
            <span className='font-bold italic'>
            Published articles and Conferences: 
            </span>
          </p>
          </div>
          
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            S. baqir,  n. al-zeheimi  , a. bani orabah  , a. al-kindi  , y. al-shakaili  and k. al-rasbi. Qualitative assessment of endangered arabian tahr/ibex (hemitragus jayakari) semen using bioxcell®and triladyl® extenders. Reproduction, Fertility and Development 25(1) 233-233 
            </li>
            <li>
            Pratap N, Memon MA, Mahgoub O, Al-Shikaili Y, Al-Habsi RS, Hago BE.  Breeding soundness examination, semen freezing and evaluation of frozen-thawed semen in native Omani bulls.  Clinical Theriogenology 6: 85-92, 2014. 
            </li>
            <li>
            Bani Orabah A., Al-Zeheimi N., Al Shakaili Y., Baqir S.: Flow Cytometry Analysis of Bovine Semen: A Qualitative Study. 13th Royan International Twin Congress, 5-7 September 2012 Tehran/ Iran
            </li>
            <li>
            Baqir S., Al-Zeheimi N., Bani Orabah A., Al-Shakaili Y. Sperm reprogramming: A promising approach for the improvement of IVF in the bovine species. Conference Paper: National Conference on Agriculture and Fisheries Research for Development, 2014 SQU  , Muscat/ Sultanate of Oman 
              </li>
              <li>
            Baqir S, Orabah AB1, AL-Zeheimi, AL-Shakaili, AL-Rasbi, Gartley and Mastromonaco. Computer Assisted Sperm Analysis (CASA) in the Critically Endangered Captive Arabian Leopard (Panthera pardus nimr): A Multivariate Clustering Analysis. Journal of Veterinary Science & Technology. J Vet Sci Technol 2018, 9:2.
              </li>
              <li>
              A.M Hussein, Y.O. Al-Shakaili, A.N. Al-Ismaily, And H.H. Al-Alawi.  Effect of different doses of  FSH on superovulation, production and quality of embryo in North Omani Cattle breed. Indian J. Anim. Res., 51 (1) 2017 : 8-14 
              </li>
          </ul>
        </div>

        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h1 className='text-center underline text-[18px] py-4 font-bold italic'>
        Participation And Attendance In Meetings / Conferences/ Workshops Training/ Committees 
        </h1>
      </div>
        {/* Experience */}
        <div className='py-6'>
         
        
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            A specialized Training Course on "Molecular Characterization of Small Ruminant Breeds" in April 01-12/ 2007 at The International Centre for Agriculture Research in Dry Areas (ICARDA) Aleppo, Syria. 
            </li>
            <li>
            Training course on "Stat and Experimental Design" at Human Resource Development Centre, on February 24-28/ 2007 Muscat Sultanate of Oman sponsored by Ministry of Agriculture.
            </li>
            <li>
            International conference on Small Ruminant Production and Health in Aird and Semi-Arid Regions, 26-28 January 2008, Sultan Qaboos University- Muscat, Sultanate of Oman. 
            </li>
            <li>
            Workshop on: “The strategy of The Animal and Plant Genetic Resource Center”, Sultanate of Oman, Muscat 31st May – 1st June 2011 
            </li>
            <li>
            Regional Coordination Meeting on “Improving the reproductive and productive performance of  local small ruminants by implementing reliable artifical insemination programmes”,Vienna, Austria, 25-27th April 2012, (RAS/5/063).
            </li>
            <li>
            3rd Conference of the International Society of Camelid Research and Development, 29 January – 1 February 2012, Sultan Qaboos University- Muscat, Sultanate of Oman. 
            </li>
            <li>
            Training course on " Evaluation And Standardization Of Agricultural Laboratories According To ISO 17025/2005" at Human Resource Development Centre, on November 6-10/ 2016 Muscat Sultanate of Oman sponsored by Arab Organization for Agricultural Development (AOAD) . 
            </li>
            <li>
            Workshop on: “Artificial insemination in Small Ruminants” organized by Arab Organization for Agriculture and Development, Sultanate of Oman, Muscat, 4-8 December 2016.
            </li>
            <li>
            Member of Oman Animal and Plant Genetic Resources Center Scientific committee (Animal Sector) since January 2020.
            </li>
          </ul>
        </div>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h1 className='text-center underline text-[18px] py-4 font-bold italic'>
        Chronology
        </h1>
        </div>
        <div className='py-6'>
          <li>
          2000 - 2006 	Animal Production specialist (Rangeland department) General Directorate of Animal Production, Ministry of Agriculture and Fisheries. 
 

          </li>
          <li>
          2006 - 2008 	Assistant Researcher (Livestock Production Research Centre) Directorate General of Agriculture & Livestock Research, Ministry of Agriculture, Sultanate of Oman.
          </li>
          <li>
          2008 till date
	Head of Livestock Reproduction Research Section. (Livestock Production Research Centre) Directorate General of Agriculture & Livestock Research, Ministry of Agriculture, Sultanate of Oman. 
Acting on behalf of the Director of the Animal Production Research Center during several periods.
Representing Ministry of Agriculture, Fisheries and Water Recourses in Oman Animal and Plant Genetic Resources Center Scientific committee (Animal Sector) meetings.

          </li>
        </div>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h1 className='text-center underline text-[18px] py-4 font-bold italic'>
        Experiences:
          </h1> 
        </div>
          <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
          Solid background in the animal reproduction and production.
            </li>
            <li>
       Solid background in conducting scientific research.
            </li>
            <li>
            Solid communication and leadership skill  
            </li>
            <li>
            Excellent experience in React js
            </li>
          </ul>
            </div> 
            <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
            <h1 className='text-center underline text-[18px] py-4 font-bold italic'>
            Achievements:
              </h1>
             </div>   
              <div className='py-6'>
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                <li>
                I contributed to the establishment of livestock reproduction research Section and its laboratory for semen cryo-preservation, I designed the interior of the laboratory, and bull barns, and chose the devices and equipment necessary to carry out the work of the laboratory.
                </li>
              </ul>
              </div>
              <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
              <h1 className='text-center underline text-[18px] py-4 font-bold italic'>
              Self-taught Experience  
              </h1>
              </div>  
              <div className='py-6'>
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                <li>
                Programming: (HTML, CSS, JavaScript and React js, ) programming languages.
                </li>
              <li>
              statistical analysis: SPSS
              </li>
              </ul>
              </div>
              </div>
      </div>
      </div>
      </div>
    {/* <DownloadPdf rootElementId="page" downloadFileName="resume"/>  */}
    </div> 
    </>
  );
};

export default CV;
