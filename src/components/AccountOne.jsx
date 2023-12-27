import React from 'react';
import logo from '/assets/layer-12@2x.png';

const AccountOne = () => {
    const screenWidth = window.innerWidth;

    return (
        <div>
            <div className={`flex-1 bg-white p-8 ${screenWidth <= 768 ? 'h-auto' : 'h-screen'} flex flex-col justify-center items-center`} style={styles.container}>
                {/* Logo Image */}
                <img src={logo} alt="Logo" className="w-36 h-auto mb-8" />

                {/* Conditionally render Worker Image */}
                {screenWidth > 768 && (
                    <img src="/assets/worker.png" alt="Cycle Image" className="w-64 h-auto mb-8" />
                )}

                {/* Conditionally render Dots Image and Text */}
                {screenWidth > 768 && (
                    <>
                        <img src="/assets/group-55@2x.png" alt="Cycle Image" className="w-20 h-auto mb-8" />
                        {/* Text Content */}
                        <p className="mb-4 text-center">
                            This is the first section of the page. You can add your content here.
                        </p>
                    </>
                )}
               
            </div>
        </div>
    );
};

const styles = {
    container: {
       
        boxSizing: 'border-box',

        '@media (max-width: 768px)': {
            padding: '16px',
        },
    },
};

export default AccountOne;
