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
      image : "https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg",
      title : "Best Full-Stack Development Project Ideas in 2024",
      author : "Isha Sharma",
      date : "Mar 25 2024",
      source : "https://www.guvi.in/blog/full-stack-development-project-ideas/"
    },
    {
      id : "ds",
      image : "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title : "Roles and Responsibilities of a Data Scientist",
      author : "Jaishree Tomar",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/"
    },
    {
      id : "cs",
      image : "https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg",
      title : "8 Different Types of Cybersecurity and Threats Involved",
      author : "Tushar Vinocha",
      date : "Sep 08 2023",
      source : "https://www.guvi.in/blog/types-of-cybersecurity/"
    },
    {
      id : "career",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfNtkJ3RDUcTupW1Y8iecFICiO_Ga0sQ6NP6NbX6Ahg&s",
      title : "Career Planning-A Guide To Your Bright Future In 2024",
      author : "Ankita Pathak",
      date : "Dec 27 2023",
      source : "https://www.digitalvidya.com/blog/career-planning/"
    },
    {
      id : "fsd",
      image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg",
      title : "6 Essential Prerequisites For Learning ReactJS",
      author : "Ramkumar",
      date : "Mar 25 2024",
      source : "https://www.guvi.in/blog/prerequisites-for-reactjs/"
    },
    {
      id : "ds",
      image : "https://emeritus.org/in/wp-content/uploads/sites/3/2023/08/Featured-Images-April-28.png",
      title : "Can A Commerce Student Do Data Science?",
      author : "Saakshi Priyadarshini",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/can-commerce-students-do-data-science/"
    },
    {
      id : "cs",
      image : "https://m.economictimes.com/thumb/height-450,width-600,imgsize-122134,msid-107179825/cyber-security-istock.jpg",
      title : "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author : "Jaishree Tomar",
      date : "Mar 26 2024",
      source : "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/"
    },
    {
      id : "career",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5h-L1FTcywSkIgRc6SV9TgnDrC_3hiUvDEfDUflVQg&s",
      title : "How To Forge A Career Path In Your Organization",
      author : "Caroline Castrillon",
      date : "May 21 2023",
      source : "https://www.forbes.com/sites/carolinecastrillon/2023/05/21/how-to-forge-a-career-path-in-your-organization/?sh=23d2b5968f3f"
    },
    {
      id : "fsd",
      image : "https://redapplelearning.in/wp-content/uploads/2023/12/roadmap-to-become-a-fullstack-developer.jpg",
      title : "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 ",
      author : "Archana",
      date : "Mar 26 2024",
      source : "https://www.guvi.in/blog/full-stack-developer-syllabus/"
    },
    {
      id : "ds",
      image : "https://www.inteliment.com/wp-content/uploads/2021/05/37-The-Techniques-Team-and-Tools-for-Effective-Data-Science.jpg",
      title : "How Long Would It Take to Learn Data Science?",
      author : "Meghana D",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/"
    },
    {
      id : "cs",
      image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_Cases_for_Cyber_Security.jpg",
      title : "How Is Cyber Security Important To Our Lives?",
      author : "GUVI GEEK",
      date : "Apr 29 2024",
      source : "https://www.guvi.in/blog/why-should-you-learn-cyber-security/"
    },
    {
      id : "career",
      image : "https://imageio.forbes.com/specials-images/imageserve/6448568b2b87c888cfeb47a1/The-road-to-success-involves-creating-your-career-path-/960x0.jpg?format=jpg&width=960",
      title : "How to choose a career? 10 essential questions you must ask yourself",
      author : "EHL insights",
      date : "Mar 01 2024",
      source : "https://hospitalityinsights.ehl.edu/questions-choosing-career"
    },
    {
      id : "fsd",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfHxuTMC8xE8pIk4f4tBYEwuVGUevUd-AjtaX7K_UMg&s",
      title : "MEAN vs MERN: Career Growth & Salary",
      author : "Admin",
      date : "Apr 12 2024",
      source : "https://www.guvi.in/blog/mean-vs-mern-stack-the-right-choice-for-me/"
    },
    {
      id : "ds",
      image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg",
      title : "12 Real-World Data Science Examples: Power Of Data Science",
      author : "Lukesh S",
      date : "Mar 25 2024",
      source : "https://www.guvi.in/blog/real-world-data-science-examples/"
    },
    {
      id : "cs",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiN-_nAAeuhbW8Ym3GJEUfkd61yUnHaNMP4139LOu15KjrTjtryCruJflAfYgkDhloJqc&usqp=CAU",
      title : "The Ultimate Cybersecurity Roadmap for Beginners",
      author : "Shrinithi Sankar",
      date : "Mar 23 2024",
      source : "https://www.guvi.in/blog/cybersecurity-jobs-the-ultimate-beginners-guide-with-roadmap/"
    },
    {
      id : "ds",
      image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_a_data_scientist.jpg",
      title : "Data Science vs Data Analytics | Best Career Choice in 2024",
      author : "Lahari chandana",
      date : "Apr 16 2024",
      source : "https://www.guvi.in/blog/data-science-vs-data-analytics-career/"
    },
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