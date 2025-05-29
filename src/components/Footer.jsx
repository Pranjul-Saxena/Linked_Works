import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">
                                Linked Work
                            </h3>
                            <p className="text-sm">
                                Collaborative Expertise.
                            </p>
                            <p className="text-sm">
                                Custom Solutions. Real Impact.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link to="/" className="hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects" className="hover:text-white transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                        <p>
                            &copy; {new Date().getFullYear()} Linked Work. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;