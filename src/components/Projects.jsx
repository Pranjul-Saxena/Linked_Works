import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Resource Portal',
        description: 'Centralized platform for managing company resources. Improved accessibility by 40% and reduced search time by 25%.',
    },
    {
        id: 2,
        title: 'Pet Tales',
        description: 'Website for a new product launch. Increased website traffic by 60% and product inquiries by 20%.',
    },
    {
        id: 3,
        title: 'Secure Healthcare Portal (MedicFusion)',
        description: 'HIPAA-compliant portal for healthcare providers and patients. Achieved 99.8% uptime and zero security breaches.',
    },
    {
        id: 4,
        title: 'Movie Website - Pretterfy',
        description: 'Redesigned movie websites with improved navigation. Increased user engagement by 50% and reduced bounce rate by 30%.',
    },
    {
        id: 5,
        title: 'JOJO Pay',
        description: 'Mobile payment application with secure transaction processing. Processed over 10,000 transactions in the first month.',
    },
    {
        id: 6,
        title: 'Learning Management System (SaaS)',
        description: 'Scalable SaaS platform for online learning. Onboarded 5000 users in the first quarter.',
    },
];

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
                <p className="text-lg text-gray-400 mt-8 max-w-3xl mx-auto">
                    Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-transparent border border-gray-600 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-indigo-200 text-indigo-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                                    <span className="font-bold">P{project.id}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-400">{project.title}</h3>
                            </div>
                            <p className="text-gray-500">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;