// import { useEffect, useState } from 'react';
// import MathJax from 'react-mathjax-preview';
// import Card from '../components/card';
// const list = [
//     {
//         title: 'TITLE',
//         formula: '`p + \\frac{1}{2} \\rho v^{2} +\\rho gh = `constant``',
//         description:
//             "Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure or a decrease in the fluid's potential energy.",
//     },
// ];

// export default function Formulas() {
//     const asciimath = '`p + \\frac{1}{2} \\rho v^{2} +\\rho gh = `constant``';
//     const math = String.raw` ${asciimath}`;
//     const [dark, setDark] = useState(true);
//     const ascii = '`U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))`';
//     return (
//         <>
//             <div className="pt-28 text-center text-2xl font-bold">Formulas and equations</div>
//             <div className="p-8 ">
//                 <div className="grid grid-cols-2  mx-auto w-full border border-opacity-25  shadow-lg">
//                     <div className="p-4 border border-opacity-25 col-span-2  md:col-span-1">Density</div>
//                     <div className="col-span-2 md:col-span-1 p-4 border">
//                         <MathJax math="`\rho = \frac{m}{V}`" />
//                     </div>
//                     <div className="p-4">Bernoulli's equation</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with
//                         a decrease in static pressure or a decrease in the fluid's potential energy.
//                         <MathJax math="`p + \frac{1}{2} \rho v^{2} +\rho gh = `constant``" />
//                     </div>
//                     <div className="p-4">Pressure at a depth h in a fluid of constant density</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`p = p_{0} + \rho gh`" />
//                     </div>
//                     <div className="p-4"> Change of pressure with height in a constant-density fluid</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`\frac{dp}{dy} = - \rho g`" />
//                     </div>
//                     <div className="p-4">Absolute pressure</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`p_{abs} = p_{g} + p_{atm}`" />
//                     </div>
//                     <div className="p-4">Pascals law</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`\frac{F_{1}}{A_{1}} = \frac{F_{2}}{A_{2}}`" />
//                     </div>
//                     <div className="p-4">Volume flow rate</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`Q = \frac{dV}{dt}`" />
//                     </div>
//                     <div className="p-4">Continuity equation (constant density)</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`A_{1} v_{1} = A_{2} v_{2}`" />
//                     </div>
//                     <div className="p-4">Continuity equation (general form)</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`\rho_{1} A_{1} v_{1} = \rho_{2} A_{2} v_{2}`" />
//                     </div>
//                     <div className="p-4">Viscosity</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`\eta = \frac{FL}{vA}`" />
//                     </div>
//                     <div className="p-4">Poiseuille’s law for resistance</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`R = \frac{8 \eta l}{\pi r^{4}}`" />
//                     </div>
//                     <div className="p-4">Poiseuille’s law</div>
//                     <div className="col-span-2 md:col-span-1 p-4">
//                         <MathJax math="`Q = \frac{(p_{2} - p_{1}) \pi r^{4}}{8 \eta l}`" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// {
//     /* <script type="math/tex; mode=display" id="MathJax-Element-2">p + \frac{1}{2} \rho v^{2} +\rho gh = constant,</script> */
// }
