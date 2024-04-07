import React from 'react'

export default function Pagination({ perPage, objectCount, paginate, currentPage }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(objectCount / perPage); i++){
        pageNumber.push(i);
    }
    return (
        <div>
            <ul className='pagination'>
                {
                    pageNumber.map(number => (
                        <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
                            <a href='!#' className='page-link' onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
