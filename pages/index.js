import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className="pt-28 min-h-screen">
                <Fade>
                    <div className="text-center text-4xl md:text-7xl my-auto heading">Fluid Mechanics</div>
                </Fade>
                <div className="grid px-2 md:grid-cols-2 mt-16 ">
                    <div className="mx-auto mb-16 px-8 dark:bg-white rounded-3xl">
                        <img src="/Venturi-flowmeter.gif" alt="fluidmechanics" className="" />
                    </div>

                    <div className="text-lg md:text-2xl px-8 md:px-0">
                        Fluid mechanics is the study of how fluids move and the forces on them.Fluid mechanics can be
                        divided into fluid statics, the study of fluids at rest, and fluid dynamics, the study of fluids
                        in motion.
                        <br /> In fluid mechanics, we assume that a fluid is a continuum by ignoring the discontinuity,
                        which molecules and an atom show.
                        <br />
                        The basic fluid mechanics principles are the continuity equation (i.e. conservation of mass),
                        the momentum principle (or conservation of momentum) and the energy equation.
                    </div>
                </div>
                <div className="text-center text-2xl md:text-4xl font-bold mt-8 md:mt-4 text- text-headingText">
                    Interesting videos to understand the important principles of fluid mechanics
                </div>
                <div className="lg:px-40 my-16 ">
                    <Splide options={{ rewind: true, autoplay: true }}>
                        <SplideSlide>
                            <iframe
                                className="mx-auto w-72 sm:w-1/2 h-40 md:h-80"
                                src="https://www.youtube.com/embed/05WkCPORlj4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className="mx-auto w-72 sm:w-1/2 h-40 md:h-80"
                                src="https://www.youtube.com/embed/DW4rItB20h4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className="mx-auto w-72 sm:w-1/2 h-40 md:h-80"
                                src="https://www.youtube.com/embed/9A-uUG0WR0w"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className="mx-auto w-72 sm:w-1/2 h-40 md:h-80"
                                src="https://www.youtube.com/embed/VvDJyhYSJv8"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className="mx-auto w-72 sm:w-1/2 h-40 md:h-80"
                                src="https://www.youtube.com/embed/G3bO8RcRgxQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="text-right font-bold text-blue-500 pb-8 md:hidden">
                    <Link href="/keyterms">
                        <a className="mx-8">Key terms &#8680;</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
