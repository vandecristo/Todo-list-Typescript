import React from 'react';

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">Todolist on TypeScript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>
)