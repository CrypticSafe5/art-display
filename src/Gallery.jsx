import React, { useState } from 'react';
import ArrowButton from './common/ArrowButton';

export default function Gallery() {
	const [pieceIndex, setPieceIndex] = useState(0);

	const pieceCount = 10;

	const carouselRotate = (index) => {
		if (index >= pieceCount) return setPieceIndex(0);
		if (index < 0) return setPieceIndex(pieceCount);
		return setPieceIndex(index);
	};

	return (
		<>
			<h3 className="title">Gallery</h3>
			<div className="container">
				<ArrowButton
					direction="left"
					className="test-next-button"
					onClick={() => carouselRotate(pieceIndex - 1)}
				>
					Previous
				</ArrowButton>
				<div className="art-piece">{`Piece Number: ${pieceIndex}`}</div>
				<ArrowButton
					direction="right"
					className="test-next-button"
					onClick={() => carouselRotate(pieceIndex + 1)}
				>
					Next
				</ArrowButton>
			</div>
		</>
	);
}
