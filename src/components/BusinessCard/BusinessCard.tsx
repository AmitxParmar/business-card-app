import { BusinessCard } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { type FC } from 'react'
import Image from 'next/image'
import React from 'react'

type BusinessCardProps = {
    inputs?: {
        title: string
        website: string
    }
    card?: BusinessCard | null | undefined
}

const BusinessCard: FC<BusinessCardProps> = ({ inputs, card }) => {

    const { data: sessionData } = useSession();

    /* API end points */
    const front = card
        ? `http://localhost:3000/api/og?username=${card.name}&title=${card.title}&imgSrc=${card.imgSrc}`
        : inputs &&
        `http://localhost:3000/api/og?username=${sessionData?.user?.name}&title=${inputs.title}&imgSrc=${sessionData?.user?.image}`

    return (
        <div className='card'>
            <div className='card-back'>
                <div className='line-numbers'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
                <code>
                    <span className='variable'>const </span>
                    <span className='function'>aboutMe </span>
                    <span className='operator'>= </span>
                    <span>{'{'} </span>
                    <div className='indent'>
                        {' '}
                        <span className='property'>name</span>
                        <span className='operator'>: </span>
                        <span className='string'>&apos;{card ? card.name : sessionData?.user?.name}&apos;</span>
                        <span>,</span>
                    </div>
                    <div className='indent'>
                        {' '}
                        <span className="property">title</span>
                        <span className="operator">: </span>
                        <span className="string">&apos;{card ? card.title : inputs?.title}&apos;</span>
                        <span>,</span>
                    </div>
                    <div className="indent">
                        {' '}
                        <span className='property'>contact</span>
                        <span className='operator'>: </span>
                        <span>{'{'}</span>
                        <div className='indent'>
                            {' '}
                            <span className='property'>email</span>
                            <span className='operator'>: </span>
                            <span className='string'>&apos;{card ? card.email : sessionData?.user?.email}&apos;</span>
                            <span>,</span>
                        </div>
                        <div className='indent'>
                            <span className='property'>website</span>
                            <span className='operator'>:</span>
                            <span className='string'>&apos;{card ? card.website : inputs?.website}&apos;</span>
                        </div>
                        <span>{'}'}</span>
                    </div>
                    <span>{'}'}</span>
                </code>
            </div>
            <div className='card-front'>
                <img height={480} width={480} className='h-[30rem] w-[30rem]' src={front} alt={"card front"} />
            </div>
        </div>
    )
}

export default BusinessCard