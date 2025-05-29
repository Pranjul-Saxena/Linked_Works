import React from 'react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12 sm:mt-22 sm:flex">
                <h1 className="text-4xl font-bold text-gray-100 mb-6">About Us</h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto text-left">
                    LinkedWorks is a software development agency dedicated to crafting innovative solutions that drive business growth. Our team of experts combines technical prowess with creative vision to deliver exceptional results.
                </p>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-100 mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Member 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Ethan Carter</h3>
                        <p className="text-indigo-600 font-medium mb-3">Lead Developer</p>
                        <p className="text-gray-600">Expertise: Node.js, Java, Spring Boot</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sophia Bennett</h3>
                        <p className="text-indigo-600 font-medium mb-3">UI/UX Designer</p>
                        <p className="text-gray-600">Expertise: Figma, Canva, User Research</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Liam Harper</h3>
                        <p className="text-indigo-600 font-medium mb-3">Backend Architect</p>
                        <p className="text-gray-600">Expertise: Python, SQL, PostgreSQL</p>
                    </div>

                    {/* Team Member 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Olivia Foster</h3>
                        <p className="text-indigo-600 font-medium mb-3">Project Manager</p>
                        <p className="text-gray-600">Expertise: Agile Methodologies, Client Communication</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='sm:flex'>
                    <h2 className="text-2xl font-bold text-gray-100 mb-8 text-center">Our Expertise</h2>
                    <p className="text-lg text-gray-400 mb-6 text-center max-w-3xl mx-auto text-left">
                        We specialize in a wide range of technologies and methodologies to provide comprehensive software development services. Our core competencies include:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Expertise Column 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Vite</li>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>
                    </div>

                    {/* Expertise Column 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Backend</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Node.js</li>
                            <li>Java + Spring Boot</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    {/* Expertise Column 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Databases</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                    {/* Expertise Column 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Cloud</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                        </ul>
                    </div>

                    {/* Expertise Column 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Gateways</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Razorpay</li>
                            <li>Google Pay</li>
                            <li>UPI</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;