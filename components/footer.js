import React from 'react';

const footer = () => {
    return (
        <footer className="h-full py-4 bg-primary dark:bg-navBg">
            <div className="text-lg my-1 flex justify-center">Made by Danish</div>
            <div className="flex justify-center">
                Copyright ©{' '}
                <a className="mx-2" href="/">
                    Danish Ahmed Mirza{' '}
                </a>{' '}
                {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default footer;
