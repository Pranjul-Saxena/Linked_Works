import React from 'react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-left mb-12 sm:mt-22 mt-16">
                <h1 className="text-4xl font-bold text-gray-100 mb-4">About Us</h1>
                <p className="text-md text-gray-400 max-w-4xl text-left">
                    LinkedWorks is a software development agency dedicated to crafting innovative solutions that drive business growth. Our team of experts combines technical prowess with creative vision to deliver exceptional results.
                </p>
            </div>
            {/* Expertise Column 1 */}


            <div>
                <div className='text-left'>
                    <h2 className="text-2xl font-bold text-gray-100 mb-4 text-left">Our Expertise</h2>
                    <p className="text-md text-gray-300 mb- max-w-3xl text-left">
                        We specialize in a wide range of technologies and methodologies to provide comprehensive software development services. Our core competencies include:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Expertise Column 1 */}
                    <div className="bg-transparent p-2 rounded-lg ">
                        <hr className="border-t border-gray-300 my-4" />
                        <h3 className="text-lg font-bold text-[#8FADCC] mb-4">Frontend</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Vite</li>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>
                    </div>

                    {/* Expertise Column 2 */}
                    <div className="bg-transparent p-2 rounded-lg ">
                        <hr className="border-t border-gray-300 my-4" />
                        <h3 className="text-lg font-bold text-[#8FADCC] mb-4">Backend</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Node.js</li>
                            <li>Java + Spring Boot</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    {/* Expertise Column 3 */}
                    <div className="bg-transparent p-2 rounded-lg ">
                        <hr className="border-t border-gray-300 my-4" />
                        <h3 className="text-lg font-bold text-[#8FADCC] mb-4">Databases</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                    {/* Expertise Column 4 */}
                    <div className="bg-transparent p-2 rounded-lg ">
                        <hr className="border-t border-gray-300 my-4" />
                        <h3 className="text-lg font-bold text-[#8FADCC] mb-4">Cloud</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                        </ul>
                    </div>

                    {/* Expertise Column 5 */}
                    <div className="bg-transparent p-2 rounded-lg ">
                        <hr className="border-t border-gray-300 my-4" />
                        <h3 className="text-lg font-bold text-[#8FADCC] mb-4">Payment Gateways</h3>
                        <ul className="space-y-2 text-gray-400">
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