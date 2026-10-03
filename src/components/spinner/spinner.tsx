// Spinner.tsx
import React, { useId } from 'react';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerColor = 'primary' | 'secondary' | 'white';

interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  label?: string;
  fullscreen?: boolean;
}

const sizeMap: Record<SpinnerSize, number> = {
  sm: 16,
  md: 32,
  lg: 48,
};

const colorMap: Record<SpinnerColor, string> = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  white: '#ffffff',
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  label = 'Загрузка...',
  fullscreen = false,
}) => {
  const pixelSize = sizeMap[size];
  const strokeColor = colorMap[color];
  const animationId = useId(); // уникальные имена keyframes

  const rotateName = `spinner-rotate-${animationId}`;
  const dashName = `spinner-dash-${animationId}`;

  const spinner = (
    <>
      <style>{`
        @keyframes ${rotateName} {
          to { transform: rotate(360deg); }
        }
        @keyframes ${dashName} {
          0%   { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50%  { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }
      `}</style>

      <div
        role="status"
        aria-label={label}
        style={{
          display: 'inline-block',
          width: pixelSize,
          height: pixelSize,
          animation: `${rotateName} 1.4s linear infinite`,
        }}
      >
        <svg viewBox="0 0 50 50" width={pixelSize} height={pixelSize}>
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={strokeColor}
            strokeWidth={5}
            strokeLinecap="round"
            style={{ animation: `${dashName} 1.4s ease-in-out infinite` }}
          />
        </svg>
      </div>
    </>
  );

  if (fullscreen) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(2px)',
          zIndex: 9999,
        }}
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};
