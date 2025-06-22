import React from 'react';

interface MovieCardProps {
  title: string;
  posterUrl: string;
  year: number;
  rating?: number;
}

const MovieCard = ({ title, posterUrl, year, rating }: MovieCardProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={posterUrl} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">Year: {year}</p>
        {rating && <p className="text-gray-700 text-base">Rating: {rating}/10</p>}
      </div>
    </div>
  );
};

export default MovieCard;