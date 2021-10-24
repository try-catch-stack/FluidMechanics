import React from 'react';
import MathJax from 'react-mathjax';
import Card from '../components/card';
const list = [
    {
        title: 'Density',
        formula: `\\rho = \\frac{m}{V}`,
        description: 'The density, of a substance is its mass per unit volume.',
    },
    {
        title: "Bernoulli's equation",
        formula: `p + \\frac{1}{2} \\rho v^{2} +\\rho gh = constant`,
        description:
            "Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure or a decrease in the fluid's potential energy.",
    },
    {
        title: 'Pressure at a depth h in a fluid of constant density',
        formula: `p = p_{0} + \\rho gh`,
        description: '',
    },
    {
        title: 'Change of pressure with height in a constant-density fluid',
        formula: `\\frac{dp}{dy} = - \\rho g`,
        description: '',
    },
    {
        title: 'Absolute pressure',
        formula: `p_{abs} = p_{g} + p_{atm}`,
        description:
            'Absolute pressure is a pressure that is relative to the zero pressure in the empty, air-free space of the universe.',
    },
    {
        title: 'Pascals law',
        formula: `\\frac{F_{1}}{A_{1}} = \\frac{F_{2}}{A_{2}}`,
        description:
            "Pascal's law states that if pressure is exerted on a non compressible fluid in an enclosed vessel, this pressure will be distributed evenly throughout the fluid.",
    },
    {
        title: 'Volume flow rate',
        formula: `Q = \\frac{dV}{dt}`,
        description: 'Volume flow rate is the volume of fluid which passes per unit time',
    },
    {
        title: 'Continuity equation (constant density)',
        formula: `A_{1} v_{1} = A_{2} v_{2}`,
        description:
            'The continuity equation states that in the case of steady flow, the amount of fluid flowing past one point must be the same as the amount of fluid flowing past another point, or the mass flow rate is constant. ',
    },
    {
        title: 'Continuity equation (general form)',
        formula: `\\rho_{1} A_{1} v_{1} = \\rho_{2} A_{2} v_{2}`,
        description: '',
    },
    {
        title: 'Viscosity',
        formula: `\\eta = \\frac{FL}{vA}`,
        description:
            "Viscosity is a measure of a fluid's resistance to flow. The SI unit of viscosity is poiseiulle (PI). Its other units are newton-second per square metre or pascal-second (Pa s)",
    },
    {
        title: 'Poiseuille’s law',
        formula: `Q = \\frac{(p_{2} - p_{1}) \\pi r^{4}}{8 \\eta l}`,
        description:
            'The velocity of the steady flow of a fluid through a narrow tube (as a blood vessel or a catheter) varies directly as the pressure and the fourth power of the radius of the tube and inversely as the length of the tube and the coefficient of viscosity.',
    },
    {
        title: 'Poiseuille’s law for resistance',
        formula: `R = \\frac{8 \\eta l}{\\pi r^{4}}`,
        description:
            'Resistance in an airway is equal to change in pressure divided by flow rate [Resistance = (Peak Pressure – Plateau Pressure) / Flow L/sec]',
    },
];
const formulas = () => {
    return (
        <>
            <div className="pt-28 text-center text-2xl font-bold">Formulas and equations</div>
            <div className="p-8 ">
                <div className="grid md:grid-cols-2 mx-auto w-full border border-opacity-25  shadow-lg">
                    {list.map((formula) => {
                        return (
                            <Card title={formula.title} description={formula.description} formula={formula.formula} />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default formulas;
