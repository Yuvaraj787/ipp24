import React from 'react';

export default function Infinityloop() {
    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes moveAlongPath {
                        0% {
                            stroke-dashoffset: 0;
                        }
                        100% {
                            stroke-dashoffset: -300;
                        }
                    }
                `}
            </style>
            <svg viewBox="0 0 300 150" style={styles.svg}>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="blur-effect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                </defs>

                <path
                    className="infinity-path"
                    d="M 150 75 C 225 0 225 150 150 75 C 75 0 75 150 150 75"
                    style={styles.infinityPath}
                />

                <path
                    className="moving-line"
                    d="M 150 75 C 225 0 225 150 150 75 C 75 0 75 150 150 75"
                    style={{
                        ...styles.movingLine,
                        animation: "moveAlongPath 4s linear infinite"
                    }}
                />
            </svg>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151b23',
    },
    svg: {
       height:'200px' ,
        width: '200px',
    },
    infinityPath: {
        fill: 'none',
        stroke: 'black',
        strokeWidth: 8,
    },
    movingLine: {
        stroke: 'url(#gradient)',
        strokeWidth: 10,
        fill: 'none',
        strokeDasharray: '100 80',
        strokeDashoffset: 0,
        filter: 'url(#blur-effect)',
    },
};
