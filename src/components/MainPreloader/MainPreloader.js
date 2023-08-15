import React, { useEffect, useState, useRef } from 'react'
import { motion, easeIn } from 'framer-motion'
import './main-preloader.scss'

function MainPreloader({setPreloader, preloader}) {
    // SET TIMER OF FIVE SECONDS FOR PRELOADER 
    const [timer, setTimer] = useState(5)

    let intervalRef = useRef();
  
    // COUNTDOWN THE TIME BY 1 SECOND
    useEffect(function() {
        intervalRef.current = setInterval(() => {
        setTimer((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(intervalRef.current)
    }, [])

    useEffect(function() {
        // REMOVE PRELOADER FROM RENDERING ONCE TIME HITS 0
        if (timer === 0) {
            clearInterval(intervalRef.current)
            setPreloader(false)
        }
    }, [timer, setPreloader])

  return (
    <div className='preloader'>
        <motion.div initial={{ y: 0, opacity: 0 }} animate={{ opacity: 1, ease: easeIn, transition: {duration: .4, delay: .4} }} className='jm-logo'>
            <h2 style={{ letterSpacing: timer < 4 ? '-1.1rem' : '-4.1rem', paddingLeft: timer < 4 ? '30px' : '0px'}}>JM</h2>
        </motion.div>
        <motion.div initial={{ height: '0%' }} animate={{ height: '100%', transition: {duration: .6, delay: 4} }} className='preloader-cover'></motion.div>
        
    </div>
  )
}

export default MainPreloader