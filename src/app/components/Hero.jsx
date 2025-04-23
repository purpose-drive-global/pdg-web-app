import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative  w-full">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("/hero-bg-image.avif")' }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-70 mix-blend-darken z-10"></div>

            <div className="relative max-w-7xl mx-auto z-20 h-full w-full flex flex-col gap-8 md:flex-row items-center py-12 px-8 justify-between">
                <div className="flex flex-col gap-[1.75rem] lg:w-3/5">
                    <h2 className="text-white font-bold font-inter text-4xl md:text-3xl xl:text-[3.75rem] lg:leading-[1.25]">
                        Empowering Africa's Gen Z to Lead, Innovate and Transform
                    </h2>
                    <p className='text-white md:w-[89%] text-sm lg:text-[1.125rem] '>We’re building a movement where media, tech, and entrepreneurship collide to spark change. Join the next generation of African changemakers.</p>
                    <button className="bg-[#FFBF00] md:w-3/4 xl:w-1/2 whitespace-nowrap rounded-[1.25rem] text-black px-4 py-5 font-semibold mt-6 hover:bg-[#FFBF00] hover:text-white transition-colors ">
                        Register to join our Community
                    </button>
                </div>
                <div className="relative ">
                    <Image
                        src='/hero-image.svg'
                        alt='hero-image'
                        width={0}
                        height={0}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}