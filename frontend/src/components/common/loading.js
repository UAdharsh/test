import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-20">
            <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
    );
};

export default Loading;
