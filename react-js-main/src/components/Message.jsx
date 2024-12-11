import React from 'react';

function Messages() {
    return (
        <main className="flex-1 bg-gray-100 p-8 flex justify-center"> {/* Adjusted to center content horizontally */}
            <div className="w-1/2"> {/* Set width to 50% */}
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Messages</h2>
                    {/* Messenger-style message display */}
                    <div className="overflow-y-auto max-h-screen"> {/* Added max height for scrollable messages */}
                        <div className="flex flex-col items-start space-y-2">
                            {/* Sample messages */}
                            <div className="flex items-center justify-end"> {/* Adjusted to align messages to the right */}
                                <div className="bg-blue-500 text-white rounded-lg p-2">
                                    Hello there!
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-gray-300 rounded-lg p-2">
                                    Hi! How can I help you?
                                </div>
                            </div>
                            {/* Add more messages as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Messages;
