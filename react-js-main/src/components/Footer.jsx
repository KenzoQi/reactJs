import React from 'react';

function Footer() {
   
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' }); 
    const day = currentDate.getDate(); 
    const year = currentDate.getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-end"> 
                <div className="text-center">
                    <p>{month} {day}, {year} @</p> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;
