import React from 'react';
import MathJax from 'react-mathjax';
import Zoom from 'react-reveal/Zoom';
const Card = ({ title, description, formula }) => {
    return (
        <>
            <Zoom>
                <div className="border-b md:border dark:border-opacity-25 hover:shadow cursor-default dark:hover:shadow-xl">
                    <div className="p-4 col-span-2  md:col-span-1  font-bold">{title}</div>
                    <div className="col-span-2 md:col-span-1 p-4 ">
                        {description}
                        <MathJax.Provider>
                            <MathJax.Node formula={formula} />
                        </MathJax.Provider>
                    </div>
                </div>
            </Zoom>
        </>
    );
};

export default Card;
