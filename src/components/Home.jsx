// import { Brain, Cloud, CodeXml, Database, PhoneIcon, Smartphone, Star, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection, ServicesGrid, TestimonialsSlider } from "./Reusable";

// const servicesData = [
//     {
//         icon: CodeXml, // Import from lucide-react
//         title: "Web Development",
//         description: "Custom websites built with modern technologies",
//         features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
//         price: "$99", // Optional
//         onCtaClick: () => navigate('/contact')
//     },
//     {
//         icon: Database, // Import from lucide-react
//         title: "Database Management",
//         description: "Custom websites built with modern technologies",
//         features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
//         price: "$99", // Optional
//         onCtaClick: () => navigate('/contact')
//     },
//     {
//         icon: Cloud, // Import from lucide-react
//         title: "Cloud Solutions",
//         description: "Custom websites built with modern technologies",
//         features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
//         price: "$99", // Optional
//         onCtaClick: () => navigate('/contact')
//     },
//     {
//         icon: Smartphone, // Import from lucide-react
//         title: "Mobile App Development",
//         description: "Custom websites built with modern technologies",
//         features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
//         price: "$99", // Optional
//         onCtaClick: () => navigate('/contact')
//     },
//     {
//         icon: Workflow, // Import from lucide-react
//         title: "Automation & AI Agents",
//         description: "Custom websites built with modern technologies",
//         features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
//         price: "$99", // Optional
//         onCtaClick: () => navigate('/contact')
//     },
//     {
//         icon: Brain, // Import from lucide-react
//         title: "AI & ML",
//         description: "Custom websites built with modern technologies",
//         features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
//         price: "$99", // Optional
//         onCtaClick: () => navigate('/contact')
//     },
// ];

import {
    CodeXml,
    Database,
    Cloud,
    Smartphone,
    Workflow,
    Brain,
    Shield,
    Cpu,
    BarChart2
} from 'lucide-react';

const servicesData = [
    {
        icon: CodeXml,
        title: "Web Development",
        description: "Custom websites and web applications built with React, Next.js, and modern frameworks",
        features: [
            "Responsive & mobile-first design",
            "SEO optimization",
            "Performance optimization",
            "CMS integration"
        ],
        price: "$999+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Database,
        title: "Database Management",
        description: "Professional database design, optimization, and maintenance services",
        features: [
            "SQL/NoSQL database design",
            "Query optimization",
            "Data migration",
            "Backup solutions"
        ],
        price: "$799+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment solutions",
        features: [
            "AWS/Azure/GCP setup",
            "Serverless architecture",
            "CI/CD pipelines",
            "Cloud security"
        ],
        price: "$1,299+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Cross-platform mobile applications for iOS and Android",
        features: [
            "React Native development",
            "App store deployment",
            "Push notifications",
            "Offline capabilities"
        ],
        price: "$1,499+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Workflow,
        title: "Automation & AI Agents",
        description: "Custom business automation and AI workflow solutions",
        features: [
            "Process automation",
            "Chatbot development",
            "RPA implementation",
            "Workflow optimization"
        ],
        price: "$1,999+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Brain,
        title: "AI & ML Solutions",
        description: "Custom artificial intelligence and machine learning implementations",
        features: [
            "Predictive analytics",
            "Computer vision",
            "Natural language processing",
            "Custom model training"
        ],
        price: "$2,499+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Comprehensive security solutions for your digital assets",
        features: [
            "Vulnerability assessment",
            "Penetration testing",
            "Security monitoring",
            "Compliance consulting"
        ],
        price: "$1,799+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: Cpu,
        title: "DevOps Services",
        description: "Streamlined development and deployment pipelines",
        features: [
            "Containerization (Docker)",
            "Kubernetes orchestration",
            "Infrastructure as Code",
            "Monitoring & logging"
        ],
        price: "$1,599+",
        onCtaClick: () => navigate('/contact')
    },
    {
        icon: BarChart2,
        title: "Data Analytics",
        description: "Transform your data into actionable insights",
        features: [
            "Business intelligence",
            "Data visualization",
            "ETL pipelines",
            "Custom dashboards"
        ],
        price: "$1,299+",
        onCtaClick: () => navigate('/contact')
    }
];
const testimonialsData = [
    {
        content: "Outstanding service and results!",
        name: "John Smith",
        position: "CEO",
        company: "Tech Corp",
        avatar: "https://example.com/avatar.jpg" // Optional
    }
];

function Home() {
 const navigate = useNavigate();

    return (
        <>
            <HeroSection
                title="Collaborative Expertise. Custom Solutions. Real Impact."
                subtitle="A team of professionals driving innovation through diverse tech expertise to create tailored digital solutions for complex challenges."
                ctaAction={() => navigate('/contact')}
            />
            <ServicesGrid services={servicesData} />
            {/*<TestimonialsSlider testimonials={testimonialsData} />*/}
        </>
    );
}

export default Home;