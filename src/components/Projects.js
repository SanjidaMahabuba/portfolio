import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">My Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Project 1</h3>
      <p className="text-gray-600">A web application built using React.js and Node.js.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Project 2</h3>
      <p className="text-gray-600">A portfolio website built using HTML, CSS, and JavaScript.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Project 3</h3>
      <p className="text-gray-600">An e-commerce website built with React.js and Firebase.</p>
    </div>
  </div>
</section>

  );
};

export default Projects;
