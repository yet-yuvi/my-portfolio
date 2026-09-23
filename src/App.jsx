import Hero from './components/Hero';
import Projects from './components/Projects';

import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description:
        'A personal portfolio website to showcase my projects and skills.',
      link: 'https://github.com/yet-yuvi/my-portfolio',
      live: 'https://yet-yuvi.github.io/my-portfolio/',
    },
    {
      id: 2,
      title: 'React Portfolio',
      description:
        'A portfolio website built using React to demonstrate my frontend skills.',
      link: 'https://github.com/yet-yuvi/react-portfolio',
      live: 'https://github.com/yet-yuvi/react-portfolio',
    },
    {
      id: 3,
      title: 'Vanilla-JavaScript-Mastery',
      description:
        'A comprehensive 9-in-1 JavaScript utility suite showcasing advanced DOM manipulation, event handling, and state management using modular native JS.',
      link: 'https://github.com/yet-yuvi/Vanilla-JavaScript-Mastery',
      live: 'https://alo-kona.github.io/Vanilla-JavaScript-Mastery/',
    },
    {
      id: 4,
      title: 'ToDo-Cli',
      description:
        'A lightweight, modular, and crash-proof Command Line Interface (CLI) application built with Node.js to seamlessly manage daily tasks directly from your terminal.',
      link: 'https://github.com/yet-yuvi/todo-cli',
      live: 'https://github.com/yet-yuvi/todo-cli',
    },
    {
      id: 5,
      title: 'To-Do App',
      description:
        'Simple to-do application to manage daily tasks efficiently.',
      link: 'https://github.com/yet-yuvi/To-Do-List',
      live: 'https://jubayar-todo.surge.sh/',
    },
    {
      id: 6,
      title: 'Marketplace Backend',
      description:
        'Backend service for an online marketplace using Node.js and Express.',
      link: 'https://github.com/yet-yuvi/Market-Place',
      live: 'https://github.com/yet-yuvi/Market-Place',
    },
    {
      id: 7,
      title: 'Employee Management System',
      description: 'A system to manage employee records and HR tasks.',
      link: 'https://github.com/yet-yuvi/Employ-Management-System',
      live: 'https://github.com/yet-yuvi/Employ-Management-System',
    },
    {
      id: 8,
      title: 'Inventory Client',
      description:
        'An application to track and manage inventory levels, orders, and deliveries.',
      link: 'https://github.com/yet-yuvi/inventory-client',
      live: 'https://github.com/yet-yuvi/inventory-client',
    },
    {
      id: 9,
      title: 'Inventory Management System',
      description:
        'An application to track and manage inventory levels, orders, and deliveries.',
      link: 'https://github.com/yet-yuvi/inventory-management',
      live: 'https://github.com/yet-yuvi/inventory-management',
    },
    {
      id: 10,
      title: 'Portfolio with JavaScript',
      description:
        'This is my portfolio with pure JavaScript, HTML, and CSS. It showcases my projects and skills in web development.',
      link: 'https://github.com/yet-yuvi/portfolio-js',
      live: 'https://jubayar-portfolio.netlify.app/',
    },
  ];

  return (
    <div className="gap-8 p-8 bg-gray-300 flex flex-col items-center justify-center h-full">
      <Hero />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
