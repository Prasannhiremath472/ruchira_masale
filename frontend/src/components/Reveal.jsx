import { useReveal } from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', variant = '', delay = 0, className = '', children, ...rest }) {
  const { ref, isVisible } = useReveal();
  const variantClass = variant ? `reveal-${variant}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
