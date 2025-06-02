import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, ArrowRight, CheckCircle, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// 🔹 Hero Section Component
export const HeroSection = ({
    title,
    subtitle,
    ctaText = "Get Started",
    ctaAction,
    backgroundImage,
    secondaryCtaText,
    secondaryCtaAction
}) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background 
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                    />
                )}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            */}
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={ctaAction}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        {ctaText}
                    </button>
                    {secondaryCtaText && (
                        <button
                            onClick={secondaryCtaAction}
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                        >
                            {secondaryCtaText}
                        </button>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-white w-8 h-8" />
            </div>
        </section>
    );
};

// 🔹 Service Cards Component
export const ServiceCard = ({ icon: Icon, title, description, features, price, ctaText = "Learn More", onCtaClick }) => {
    return (
        <div className="bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 group">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-100 mb-4">{title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

            {features && (
                <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}




        </div>
    );
};

// 🔹 Services Grid Component
export const ServicesGrid = ({ services, title = "Our Services", subtitle }) => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">{title}</h2>
                    {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// 🔹 Testimonials Slider Component
export const TestimonialsSlider = ({ testimonials, title = "What Our Clients Say" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">{title}</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-50 to-purple-400 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="flex justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                        </div>

                        <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                            "{testimonials[currentIndex].content}"
                        </blockquote>

                        <div className="text-center">

                            <div className="font-semibold text-gray-900 text-lg">
                                {testimonials[currentIndex].name}
                            </div>
                            <div className="text-gray-600">
                                {testimonials[currentIndex].position}
                            </div>
                            {testimonials[currentIndex].company && (
                                <div className="text-blue-600 font-medium">
                                    {testimonials[currentIndex].company}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// 🔹 Navigation Bar Component
// export const Navbar = ({ logo, navItems, ctaText = "Get Started", onCtaClick }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//             }`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <div className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'
//                             }`}>
//                             {logo}
//                         </div>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-baseline space-x-8">
//                             {navItems.map((item, index) => (
//                                 <a
//                                     key={index}
//                                     href={item.href}
//                                     className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-gray-200'
//                                         }`}
//                                 >
//                                     {item.label}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* CTA Button */}
//                     <div className="hidden md:block">
//                         <button
//                             onClick={onCtaClick}
//                             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
//                         >
//                             {ctaText}
//                         </button>
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className={`p-2 rounded-md transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'
//                                 }`}
//                         >
//                             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {isOpen && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
//                             {navItems.map((item, index) => (
//                                 <a
//                                     key={index}
//                                     href={item.href}
//                                     className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
//                                     onClick={() => setIsOpen(false)}
//                                 >
//                                     {item.label}
//                                 </a>
//                             ))}
//                             <button
//                                 onClick={() => {
//                                     onCtaClick();
//                                     setIsOpen(false);
//                                 }}
//                                 className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold"
//                             >
//                                 {ctaText}
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// 🔹 Contact Form Component
export const ContactForm = ({ title = "Get In Touch", subtitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
                        {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Your company name"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Tell us about your project..."
                                />
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 🔹 Contact Info Component
export const ContactInfo = ({ contactDetails }) => {
    return (
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
                {contactDetails.email && (
                    <div className="flex items-center">
                        <Mail className="w-6 h-6 mr-4 text-blue-300" />
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href={`mailto:${contactDetails.email}`} className="text-blue-300 hover:text-blue-200">
                                {contactDetails.email}
                            </a>
                        </div>
                    </div>
                )}

                {contactDetails.phone && (
                    <div className="flex items-center">
                        <Phone className="w-6 h-6 mr-4 text-blue-300" />
                        <div>
                            <p className="font-semibold">Phone</p>
                            <a href={`tel:${contactDetails.phone}`} className="text-blue-300 hover:text-blue-200">
                                {contactDetails.phone}
                            </a>
                        </div>
                    </div>
                )}

                {contactDetails.address && (
                    <div className="flex items-center">
                        <MapPin className="w-6 h-6 mr-4 text-blue-300" />
                        <div>
                            <p className="font-semibold">Address</p>
                            <p className="text-blue-100">{contactDetails.address}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// 🔹 Demo Usage Component (for testing)
const DemoUsage = () => {
    // Sample data
    const sampleServices = [
        {
            icon: Star,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies.",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
            price: "$99",
            onCtaClick: () => alert("Web Development clicked!")
        },
        {
            icon: Mail,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your business.",
            features: ["Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
            price: "$199",
            onCtaClick: () => alert("Digital Marketing clicked!")
        }
    ];

    const sampleTestimonials = [
        {
            content: "This team transformed our business completely. Outstanding results!",
            name: "John Smith",
            position: "CEO",
            company: "Tech Corp",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
            content: "Professional, reliable, and delivered exactly what we needed.",
            name: "Sarah Johnson",
            position: "Marketing Director",
            company: "Growth Inc"
        }
    ];

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
    ];

    const contactDetails = {
        email: "hello@company.com",
        phone: "+1 (555) 123-4567",
        address: "123 Business St, City, State 12345"
    };

    return (
        <div className="min-h-screen">
            <Navbar
                logo="YourBrand"
                navItems={navItems}
                onCtaClick={() => alert("CTA clicked!")}
            />

            <HeroSection
                title="Build Something Amazing"
                subtitle="We help businesses grow with cutting-edge digital solutions and expert consulting services."
                ctaAction={() => alert("Hero CTA clicked!")}
                secondaryCtaText="Learn More"
                secondaryCtaAction={() => alert("Secondary CTA clicked!")}
            />

            <ServicesGrid
                services={sampleServices}
                subtitle="We offer comprehensive solutions to help your business thrive in the digital age."
            />

            <TestimonialsSlider testimonials={sampleTestimonials} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-20">
                <div className="lg:col-span-2">
                    <ContactForm subtitle="Ready to start your project? Let's discuss how we can help you achieve your goals." />
                </div>
                <div className="lg:col-span-1">
                    <ContactInfo contactDetails={contactDetails} />
                </div>
            </div>
        </div>
    );
};

export default DemoUsage;