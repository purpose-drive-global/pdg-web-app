'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Gallery() {
    const images = [
        '/gallery-image.avif',
        '/gallery-image2.avif',
        '/gallery-image3.avif',
        '/gallery-image4.avif',
        '/gallery-image5.avif',
        '/gallery-image6.avif',
        '/gallery-image7.avif',
        '/gallery-image8.avif',
        '/gallery-image9.avif',
        '/gallery-image10.avif',
        '/gallery-image11.avif',
    ]

    return (
        <section
            className="relative inset-0 bg-[#0E0E0D] bg-cover bg-center z-0 py-20"
            style={{ backgroundImage: `url('/gallery-bg.avif')` }}
        >
            <div className="mx-auto max-w-7xl px-8">
                <div className="flex flex-col gap-6 mb-12">
                    <motion.h2
                        className="text-4xl font-semibold font-inter text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Gallery
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/80 font-inter max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Gallery of our past events and beautiful moments.
                    </motion.p>
                </div>

                {/* Image Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={350}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
