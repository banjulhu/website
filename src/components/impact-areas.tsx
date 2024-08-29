import React from 'react';
import { motion } from 'framer-motion';

const diagramData = [
    {
        title: 'Research efficiency',
        description: 'We make infrastructure, bioinformatics resources and processes faster, easier to use, and more integrated',
        icon: '🔧', // Replace with your actual icon or SVG
    },
    {
        title: 'Scientific legacy',
        description: 'We create and disseminate new knowledge on research infrastructure, bioinformatics resources, and related guidelines',
        icon: '📚',
    },
    {
        title: 'Benefits derived from working together',
        description: 'We facilitate knowledge-sharing and cooperation',
        icon: '🤝',
    },
    {
        title: 'Public awareness',
        description: 'We raise awareness of socio-economic and societal benefits of bioinformatics and Open Science',
        icon: '📢',
    },
    {
        title: 'Policy influence',
        description: 'We shape policy in the area of Open Science and FAIR',
        icon: '📜',
    },
    {
        title: 'Equal opportunity',
        description: 'We raise awareness of diversity and inclusiveness',
        icon: '⚖️',
    },
    {
        title: 'Skills development',
        description: 'We upskill resource users and service providers',
        icon: '📈',
    },
    {
        title: 'Research infrastructure sustainability',
        description: 'We work to increase ELIXIR’s visibility with, and appreciation by, its funders',
        icon: '🌱',
    },
    {
        title: 'Bioinformatics resource uptake',
        description: 'We work to increase resource usage and appreciation by users',
        icon: '📊',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = (angle, radius) => ({
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
        opacity: 1,
        x: radius * Math.cos((angle * Math.PI) / 180),
        y: radius * Math.sin((angle * Math.PI) / 180),
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
});

export default function DiagramComponent() {
    const radius = 400; // Adjust radius of the circle

    return (
        <div className="relative w-full h-full bg-black">
            <div className="absolute">
                <motion.div
                    className="relative w-[500px] h-[500px] justify-self-center top-50 right-50"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {diagramData.map((item, index) => {
                        const angle = (index / diagramData.length) * 360;
                        return (
                            <motion.div
                                key={index}
                                className="absolute w-50 flex flex-col items-center justify-center bg-white shadow-lg rounded-full text-center p-4 border border-gray-200"
                                variants={itemVariants(angle, radius)}
                            >
                                <span className="text-4xl mb-4">{item.icon}</span>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};
