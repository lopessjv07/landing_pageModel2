import React from 'react';

// O componente Input é um "forwardRef" para que possa ser usado em formulários
// que precisam de referência ao elemento DOM, embora não seja estritamente
// necessário para o seu caso de uso atual, é uma boa prática.
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={className}
            ref={ref}
            {...props}
        />
    );
});

// Define um nome de exibição para facilitar a depuração
Input.displayName = "Input";

// Exporta o componente
export { Input };
