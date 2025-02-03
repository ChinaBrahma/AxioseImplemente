// import React from 'react';

// const Card = ({movieData}) => {
//     const { Poster, imdbID } = movieData
//     return ( 
//         <li className='hero-container'>
//             <div className='main-container'>
//                 <div className='poster-container'>
//                     <img src={Poster}
//                     className='poster'
//                     alt={imdbID}
//                     />
//                 </div>
//                 <div className='ticket-container'>
//                     <div className='ticket_content'>
//                         <a href={`/movie/${imdbID}`}>
//                             <button
//                             className='ticket_buy-btn' >Watch Now</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>            
//         </li>
//     );
// };

// export default Card;

import React from 'react';

const Card = ({ movieData }) => {
    const { Poster, imdbID, Title } = movieData;
    return (
        <li className="flex justify-center items-center list-none">
            <div className="w-72 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 transform hover:scale-105">
                <div className="w-full h-112">
                    <img 
                        src={Poster} 
                        className="w-full h-full object-cover" 
                        alt={Title} 
                    />
                </div>
                <div className="bg-white p-4 text-center">
                    <div className="flex justify-center items-center">
                        <a href={`/movie/${imdbID}`} className="no-underline">
                            <button className="bg-red-500 text-white border-none rounded-md px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-red-600">
                                Watch Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;
