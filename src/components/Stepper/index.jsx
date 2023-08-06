import React, { useState } from 'react'

export default function Stepper() {

    let [step, setStep] = useState(3)

    let handlerAtras = () => {
        if (step !== 1) {
            setStep(step - 1)
        }
    }




    let handlerAdelante = () => {
        if (step !== 3)
            setStep(step + 1)
    }
    return (
        <>
            <div>

                <>
                    {step == 1 && < p > paso 1</p>}
                    {step == 2 && < p > paso 2</p >}
                    {step == 3 && < p > paso 3</p >}
                </>
            </div >
            <button onClick={handlerAtras}>Atras</button>
            <button onClick={handlerAdelante}>adelante</button>
        </>
    )
}
