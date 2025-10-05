import React from 'react';

// --- Componente Card ---
// É o contêiner principal do cartão. Ele renderiza uma div e aplica
// as classes e props recebidas.
const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={className}
        {...props}
    />
));
Card.displayName = "Card";

// --- Componente CardContent ---
// Usado para a área de conteúdo principal dentro de um Card.
// Ajuda a padronizar o espaçamento interno.
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={className}
        {...props}
    />
));
CardContent.displayName = "CardContent";

// Exporta ambos os componentes para que possam ser importados como:
// import { Card, CardContent } from '@/components/ui/card.jsx'
export { Card, CardContent };
