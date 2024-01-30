"use client"
import Image from 'next/image'
import { CARD_INFO } from '@/utils/utils'

export function CardWrapper(){
    
    return(
        <section className='flex flex-wrap gap-10 min-h-full py-8'>
            {CARD_INFO.map(card => 
                <Card
                lang={card.lang}
                text={card.text}
                imgs={card.imgs}
                width={80} 
                />
                )}
        </section>
    )
}


function Card({lang, text, width, imgs} : 
    {lang: string, text:string, width: number, imgs: string[][]}) {        
    return (
        <div className='bg-cyan-900 w-72 h-96 rounded-lg px-2 py-4'>
            <div className='flex flex-wrap gap-2'>
                {imgs.map(img =>
                    <Image
                        src={img[0]}
                        alt={img[1]}
                        width={width}
                        height={width}
                    />
            )}
            </div>
            <p className='text-cyan-400 text-2xl mt-2'>{`${lang}`}</p>
            <p className='mt-4'>{`${text}`}</p>
        </div>
    )
}