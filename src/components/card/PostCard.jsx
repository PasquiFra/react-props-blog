import './genericCard.scss'
import React, { useState } from 'react';


const Card = ({ post }) => {
    const paragraph = post.content
    const intro = (paragraph) => {
        return paragraph.split(" ").slice(0, 40).join(" ")
    };
    const [isAbstract, setIsAbstract] = useState(true);

    const handleReadMore = (boolean) => {
        setIsAbstract(boolean);
    };

    return (
        <div className='card p-3'>
            <figure>
                <img src={`https://picsum.photos/id/${post.id}/200/300`} alt={`img-${post.id}`} />
            </figure>
            <h3>{post.title}</h3>
            <p>
                {isAbstract ? intro(paragraph) : paragraph}
                <span>
                    {isAbstract && <button id='readMore' onClick={() => handleReadMore(false)}>...Leggi tutto l'articolo</button>}
                    {!isAbstract && <button id='readLess' onClick={() => handleReadMore(true)}>...Mostra meno</button>}
                </span>
            </p>
            <div>
                {post.tags.map((tag, i) => {
                    return <span key={`tag-${tag}-${i}`} className={`me-2 ${tag}`}>{tag}</span>
                })}
            </div>
        </div>
    )
}

export default Card
