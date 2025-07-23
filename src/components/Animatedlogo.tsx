import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../../public/lottie/logo.json"

const Animatedlogo = () => {
    return (
        <div className="max-w-[1062px] w-full mx-auto">
            <Lottie animationData={animationData} loop={true} />
        </div>
    )
}

export default Animatedlogo
