// import React, { useRef, useEffect, useContext } from 'react';
// import { ReactContext } from '../context/ReactContextProvider';

// export default function ImageFilterVisualizer({ instrumentIndex }) {
//     const i = instrumentIndex;
//     const ref = useRef(null);
//     const { instrumentParams } = useContext(ReactContext);
//     const frequency = instrumentParams[i].find((knob) => {
//         return knob.knob === 'freq1';
//     })?.value;
//     const interval = instrumentParams[i].find((knob) => {
//         return knob.knob === 'interval';
//     })?.value;

//     const centerCanvasImage = (ctx, frequency, interval) => {
//         const random = Math.floor(Math.random() * 100);
//         const canvas = ctx.canvas;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const squareSize = 100 + (frequency * 0.01); // Adjust the size as needed
//         const squareColor = `#666`; // Adjust the color as needed

//         // Calculate the center of the canvas
//         const centerX = canvas.width / 2;
//         const centerY = canvas.height / 2;

//         // Calculate the top-left corner of the square
//         const squareX = centerX - squareSize / 2;
//         const squareY = centerY - squareSize / 2;
//         // ctx.setTransform(1, 0, 0, interval * 0.01, -squareX, -squareY);

//         // Set the stroke color and width
//         ctx.strokeStyle = squareColor;
//         ctx.lineWidth = 2 + (interval * 0.01); // Adjust the line width as needed

//         // Draw the square outline

//         // Draw the square from its center
//         // ctx.fillRect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
//         ctx.strokeRect(squareX, squareY, squareSize, squareSize);
//       };
//     useEffect(() => {
//         const canvas = ref.current;
//         const ctx = canvas.getContext('2d');
//         centerCanvasImage(ctx, frequency, interval);
//     }, []);

//     useEffect(() => {
//         if (!ref.current) return;
//         const canvas = ref.current;
//         // Use the updated imgData directly to draw the image back onto the canvas

//         const ctx = canvas.getContext('2d');
//         centerCanvasImage(ctx, frequency, interval);
//        //  };

//     }, [frequency, interval]);

//     return (
//         <canvas id={`canvas-${i}`} className="visualizer" ref={ref} width="150" height="150"></canvas>
//     );
// }