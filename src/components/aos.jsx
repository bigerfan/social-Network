'use client'

import { useEffect } from 'react'
import aos from 'aos'

export const Aos = () => {

    useEffect(() => {
        aos.init({
            easing: 'ease-out-quad',
            duration: 1000,
        })
    },[])

    return null
}
