import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import All from './Pages/All';
import FullStackDevelopment from './Pages/FullStackDevelopment';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import PageNotfound from './Pages/PageNotfound';
import Navbar from './Components/Navbar';
import Tabs from './Components/Tabs';

const App = () => {


  const dataApi = [
    {
      id : "fsd",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-768x513.jpg",
      title : "Best Full-Stack Development Project Ideas in 2024",
      author : "Isha Sharma",
      date : "Mar 25 2024",
      source : "https://www.guvi.in/blog/full-stack-development-project-ideas/"
    },
    {
      id : "fsd",
      image : "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-945x495.jpg",
      title : "6 Essential Prerequisites For Learning ReactJS",
      author : "Ramkumar",
      date : "Mar 25 2024",
      source : "https://www.guvi.in/blog/prerequisites-for-reactjs/"
    },
    {
      id : "fsd",
      image : "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
      title : "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 ",
      author : "Archana",
      date : "Mar 26 2024",
      source : "https://www.guvi.in/blog/full-stack-developer-syllabus/"
    },
    {
      id : "fsd",
      image : "https://www.guvi.in/blog/wp-content/uploads/2020/12/tumbnail-img-2-1170x480.jpg",
      title : "MEAN vs MERN: Career Growth & Salary",
      author : "Admin",
      date : "Apr 12 2024",
      source : "https://www.guvi.in/blog/mean-vs-mern-stack-the-right-choice-for-me/"
    },
    {
      id : "ds",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      title : "Roles and Responsibilities of a Data Scientist",
      author : "Jaishree Tomar",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/"
    },
    {
      id : "ds",
      image : "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
      title : "Can A Commerce Student Do Data Science?",
      author : "Saakshi Priyadarshini",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/can-commerce-students-do-data-science/"
    },
    {
      id : "ds",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
      title : "How Long Would It Take to Learn Data Science?",
      author : "Meghana D",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/"
    },
    {
      id : "ds",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      title : "12 Real-World Data Science Examples: Power Of Data Science",
      author : "Lukesh S",
      date : "Mar 25 2024",
      source : "https://www.guvi.in/blog/real-world-data-science-examples/"
    },
    {
      id : "ds",
      image : "https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-2048x1024.png",
      title : "Data Science vs Data Analytics | Best Career Choice in 2024",
      author : "Lahari chandana",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/data-science-vs-data-analytics-career/"
    },
    {
      id : "cs",
      image : "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      title : "8 Different Types of Cybersecurity and Threats Involved",
      author : "Tushar Vinocha",
      date : "Sep 08 2023",
      source : "https://www.guvi.in/blog/types-of-cybersecurity/"
    },
    {
      id : "cs",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title : "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author : "Jaishree Tomar",
      date : "Mar 26 2024",
      source : "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/"
    },
    {
      id : "cs",
      image : "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-1170x480.png",
      title : "How Is Cyber Security Important To Our Lives?",
      author : "GUVI GEEK",
      date : "Apr 29 2024",
      source : "https://www.guvi.in/blog/why-should-you-learn-cyber-security/"
    },
    {
      id : "cs",
      image : "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title : "The Ultimate Cybersecurity Roadmap for Beginners",
      author : "Shrinithi Sankar",
      date : "Mar 23 2024",
      source : "https://www.guvi.in/blog/cybersecurity-jobs-the-ultimate-beginners-guide-with-roadmap/"
    },
    {
      id : "career",
      image : "https://www.digitalvidya.com/blog/wp-content/uploads/2019/07/Career-Planning_11e51d7713b3dd7a9c26782ae82eb165.webp",
      title : "Career Planning-A Guide To Your Bright Future In 2024",
      author : "Ankita Pathak",
      date : "Dec 27 2023",
      source : "https://www.digitalvidya.com/blog/career-planning/"
    },
    {
      id : "career",
      image : "https://imageio.forbes.com/specials-images/imageserve/6448568b2b87c888cfeb47a1/The-road-to-success-involves-creating-your-career-path-/960x0.jpg?format=jpg&width=1440",
      title : "How To Forge A Career Path In Your Organization",
      author : "Caroline Castrillon",
      date : "May 21 2023",
      source : "https://www.forbes.com/sites/carolinecastrillon/2023/05/21/how-to-forge-a-career-path-in-your-organization/?sh=23d2b5968f3f"
    },
    {
      id : "career",
      image : "https://hospitalityinsights.ehl.edu/hubfs/Career%20choice-2.jpeg",
      title : "How to choose a career? 10 essential questions you must ask yourself",
      author : "EHL insights",
      date : "Mar 01 2024",
      source : "https://hospitalityinsights.ehl.edu/questions-choosing-career"
    }
  ]


  return (
    <div>
      
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All  dataApi={dataApi}/>} />
        <Route path='/full-stack-development' element={<FullStackDevelopment  dataApi={dataApi}/>} />
        <Route path='/data-science' element={<DataScience  dataApi={dataApi}/>} />
        <Route path='/cyber-security' element={<CyberSecurity  dataApi={dataApi}/>} />
        <Route path='/career' element={<Career  dataApi={dataApi}/>} />
        <Route path='/card' element={<Tabs dataApi={dataApi} />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;