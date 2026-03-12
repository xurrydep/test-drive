import React from 'react';
import Navigation from '../components/Navigation';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Bot Learning Platform</title>
            </head>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;