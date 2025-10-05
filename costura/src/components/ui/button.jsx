import React from 'react';


const Button = ({ children, className, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

// Exporta o componente para ser usado em outros arquivos
export { Button };
