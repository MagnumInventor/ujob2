import React from 'react';
import '../../styles/globals.css';
import '../../styles/user/worker/ProjectsContainer.module.css';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ProjectsContainer from '../../user/worker/ProjectsContainer';

function SafeComponent({ Component }) {
  try {
    return <Component />;
  } catch (error) {
    console.error(`Error in component: ${Component.name}`, error);
    return <div>Error in {Component.name}</div>;
  }
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-600 text-white">
      <SafeComponent Component={Header} />
      <main className="p-4">
        <SafeComponent Component={ProjectsContainer} />
      </main>
      <SafeComponent Component={Footer} />
    </div>
  );
}

export default ProjectsPage;
