import React, { useState, useEffect, useRef} from 'react'
import './work-preloader.scss'
import { motion, easeIn } from 'framer-motion'

function WorkPreloader({ setWorkPreloader, workPreloader}) {
    // SET TIMER OF FIVE SECONDS FOR PRELOADER 
    const [timer, setTimer] = useState(3)

    let interval = useRef();
  
    // COUNTDOWN THE TIME BY 1 SECOND
    useEffect(function() {
        interval.current = setInterval(() => {
        setTimer((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval.current)
    }, [])

    useEffect(function() {
        // REMOVE PRELOADER FROM RENDERING ONCE TIME HITS 0
        if (timer === 0) {
            clearInterval(interval.current)
            setWorkPreloader(false)
        }
    }, [timer, setWorkPreloader])

  return (
    <div className='work-preloader'>
        <div className='loading'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: easeIn }} transition={{ duration: .4, delay: .2}}></motion.div>
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1, ease: easeIn }} transition={{ duration: .4, delay: .8}}></motion.div>
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1, ease: easeIn }} transition={{ duration: .4, delay: 1.4}}></motion.div>
        </div>
        <motion.div initial={{ height: '0%' }} animate={{ height: '100%', transition: {duration: .6, delay: 2} }} className='work-preload-cover'></motion.div>
    </div>
  )
}

export default WorkPreloader