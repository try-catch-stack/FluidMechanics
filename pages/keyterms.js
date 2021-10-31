import { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

export default function KeyTerms() {
    const [dark, setDark] = useState(true);
    return (
        <>
            <Fade>
                <div className="pt-28 text-center text-2xl font-bold">KEY TERMS</div>
            </Fade>
            <div className="p-8 ">
                <table className="table-fixed mx-auto w-full border shadow-lg">
                    <Zoom>
                        <thead>
                            <tr className="border">
                                <th className="py-8 md:text-xl">Term</th>
                                <th className="py-8 md:text-xl">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Fluid</td>
                                <td className="md:text-center p-2 md:p-4">
                                    A fluid is a liquid, gas, or other material that continuously deforms (flows) under
                                    an applied shear stress, or external force
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Fluid dynamics</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Fluid dynamics is a subdiscipline of fluid mechanics that describes the flow of
                                    fluids—liquids and gases. It has several subdisciplines, including aerodynamics and
                                    hydrodynamics.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Atmospheric pressure</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Atmospheric pressure, also known as barometric pressure, is the pressure within the
                                    atmosphere of Earth. The standard atmosphere is a unit of pressure defined as
                                    101,325 Pa, which is equivalent to 760 mm Hg, 29.9212 inches Hg, or 14.696 psi
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Fluid flow rate</td>
                                <td className="md:text-center p-2 md:p-4">
                                    In fluid mechanics, the volumetric flow rate (also known as volume flow rate, rate
                                    of fluid flow, or volume velocity) is the volume of fluid which passes per unit
                                    time; usually it is represented by the symbol Q (sometimes V̇). The SI unit is cubic
                                    metres per second (m3/s).
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Gauge pressure</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Gauge pressure is the pressure relative to atmospheric pressure. Gauge pressure is
                                    positive for pressures above atmospheric pressure
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Absolute pressure</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Sum of gauge pressure and atmospheric pressure
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Acrhimedes' principle</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Archimedes' principle states that a body immersed in a fluid is subjected to an
                                    upwards force equal to the weight of the displaced fluid. Buoyant force on an object
                                    equals the weight of the fluid it displaces.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Bernoulli's principle</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Bernoulli's principle states that an increase in the speed of a fluid occurs
                                    simultaneously with a decrease in static pressure or a decrease in the fluid's
                                    potential energy.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Buoyant force</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Buoyant force is the upward force a fluid exerts on an object
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Density</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Density is the mass per unit volume of a substance or object
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Hydrostatic equilibrium</td>
                                <td className="md:text-center p-2 md:p-4">
                                    In fluid mechanics, hydrostatic equilibrium (hydrostatic balance, hydrostasy) is the
                                    condition of a fluid or plastic solid at rest, which occurs when external forces,
                                    such as gravity, are balanced by a pressure-gradient force.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Idea fluid</td>
                                <td className="md:text-center p-2 md:p-4">
                                    An ideal fluid is a fluid that is incompressible and no internal resistance to flow
                                    (zero viscosity). In addition ideal fluid particles undergo no rotation about their
                                    center of mass (irrotational).
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Laminar flow</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Laminar flow is a type of flow pattern of a fluid in which all the particles are
                                    flowing in parallel lines
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Turbulent flow</td>
                                <td className="md:text-center p-2 md:p-4">
                                    In fluid dynamics, turbulence or turbulent flow is fluid motion characterized by
                                    chaotic changes in pressure and flow velocity.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Pascal's law</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Pascal's law is a principle in fluid mechanics given by Blaise Pascal that states
                                    that a pressure change at any point in a confined incompressible fluid is
                                    transmitted throughout the fluid such that the same change occurs everywhere.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4"> Reynolds number</td>
                                <td className="md:text-center p-2 md:p-4">
                                    The Reynolds number (Re) helps predict flow patterns in different fluid flow
                                    situations. At low Reynolds numbers, flows tend to be dominated by laminar
                                    (sheet-like) flow, while at high Reynolds numbers flows tend to be turbulent.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4"> Specific gravity</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Specific gravity, or relative density , is the ratio of the density of a substance
                                    to the density of a given reference material. Specific gravity for liquids is nearly
                                    always measured with respect to water at its denses
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Hydraulic gradient</td>
                                <td className="md:text-center p-2 md:p-4">
                                    This is the slope of the water surface in an open channel, the slope of the water
                                    surface of the groundwater table, or the slope of the water pressure for pipes under
                                    pressure.The hydraulic gradient is the change in total head divided the distance
                                    over which the change occurs.
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Viscosity</td>
                                <td className="md:text-center p-2 md:p-4">
                                    The viscosity of a fluid is a measure of its resistance to deformation at a given
                                    rate. For liquids, it corresponds to the informal concept of "thickness"
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-center p-2 md:p-4">Boundary layer</td>
                                <td className="md:text-center p-2 md:p-4">
                                    Boundary layer, in fluid mechanics, thin layer of a flowing gas or liquid in contact
                                    with a surface such as that of an airplane wing or of the inside of a pipe. The
                                    fluid in the boundary layer is subjected to shearing forces.
                                </td>
                            </tr>
                        </tbody>
                    </Zoom>
                </table>
                <div className="text-right grid grid-cols-2  font-bold text-blue-500 pt-12 md:hidden">
                    <Link href="/">
                        <a className="text-left">&#8678; Home </a>
                    </Link>
                    <Link href="/formulas">
                        <a className="">Formulas &#8680;</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
