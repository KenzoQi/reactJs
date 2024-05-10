import React from 'react';

function Dashboard() {
    return (
        <main className="flex-1 bg-gray-100 p-8 flex justify-center"> 
            <div className="w-1/2"> 
                <div className="container mx-auto bg-white shadow-lg rounded-lg px-6 py-4"> 
                    <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                        {/* Grades */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Grades</h3>
                            <h5>IT211  1.00</h5>
                            <h5>IT222  1.00</h5>
                            <h5>IT224  1.00</h5>
                            
                        </div>
                        
                        {/* Balance */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Balance</h3>
                            <h5>100.00</h5>
                            <h5>750.00</h5>
                            <h5>150.00</h5>

                          
                        </div>
                        
                        {/* Announcements */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Announcements</h3>
                            <h5>You Passed</h5>
                            <h5>You Passed</h5>
                            <h5>You Passed</h5>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
