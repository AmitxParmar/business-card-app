import { BusinessCard } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { type FC } from 'react'

import React from 'react'

type BusinessCardProps = {
    inputs?: {
        title: string
        website: string
    }
    card?: BusinessCard | null | undefined
}

const BusinessCard: FC<BusinessCardProps> = ({ inputs, card }) => {
    return (
        <div className='card'>
            <div className='card-back'>

            </div>
        </div>
    )
}

export default BusinessCard