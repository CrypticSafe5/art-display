import React, { useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ArrowButton(props) {
	const canvasRef = useRef(null);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const wrapperHook = useCallback((node) => {
		if (node !== null) {
			const domRect = node.getBoundingClientRect();
			setWidth(domRect.width - 12);
			setHeight(domRect.height - 12);
		}
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext('2d');

		context.fillStyle = 'lightgray';
    	context.fillRect(0, 0, width, height);
		context.beginPath();

		if (props.direction === 'left') {
			context.moveTo(width, 0);
			context.lineTo(0, (height / 2));
			context.lineTo(width, height);
			context.stroke();
		} else if (props.direction === 'right') {
			context.moveTo(0, 0);
			context.lineTo(width, (height / 2));
			context.lineTo(0, height);
			context.stroke();
		}
	}, [width, height, props.direction]);

	return (
		<div ref={wrapperHook} {...props}>
			{/* ^^^ This div isn't scaling as intended */}
			{props.children}
			<canvas id="left-arrow" ref={canvasRef}/>
		</div>
	);
}

ArrowButton.propTypes = {
	direction: PropTypes.string
}
