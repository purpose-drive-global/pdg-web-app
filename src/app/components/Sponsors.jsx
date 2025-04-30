'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

const Sponsors = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    }

    const sponsors = [
        { id: 1, name: "Unicaf", logo: "/unicaf.svg" },
        { id: 2, name: "ALX", logo: "/alx.svg" },
        { id: 3, name: "Ingressive for Good", logo: "/I4G.svg" },
        { id: 4, name: "Ideation Hub", logo: "/ideation-hub.svg" },
        { id: 5, name: "SWIT", logo: "/SWIT.svg" },
        { id: 6, name: "Spurt", logo: "/spurt.svg" },
        { id: 7, name: "EBU", logo: "/EBU.svg" },
        { id: 8, name: "Eridanspace", logo: "/eridanspace.svg" },
        { id: 9, name: "Doctor Care", logo: "/doctorcare.svg" },
    ];

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                <motion.h2
                    className="md:text-4xl text-center md:text-left text-2xl font-semibold font-inter text-black mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Sponsors/ Partners
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.id}
                            className="flex items-center justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={logoVariants}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.1 * (index % 4)
                            }}
                        >
                            <div className="bg-[#FFF7D675] rounded-lg p-6 w-full h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                                <Image
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    width={140}
                                    height={70}
                                    className="max-w-full max-h-20 object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full flex lg:justify-end mt-8">
                    <motion.button 
                        className="bg-transparent border w-full border-[#FFBF00] rounded-[1.25rem] text-black px-6 py-4 font-semibold hover:bg-[#FFBF00] hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Partner with PDG
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
