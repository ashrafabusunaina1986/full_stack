import React, { Fragment, useState } from 'react'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'

const useForm = (elements) => {
    const init = (number = false) => {
        const variavles = {}
        if (!elements) return null
        elements.map(element => {
            if (number && element.type === 'number') {
                variavles[`${element.id}`] = 0
            } else {
                variavles[`${element.id}`] = ''
            }
        })
        return variavles
    }
    const [entry, setEntry] = useState(init(true))
    const [errorValue, setErrorValue] = useState(init)

    const signvalue = e => {
        const error = {}
        const { id, value, type, nodeName } = e.target
        if (nodeName === 'INPUT') {
            if (type === 'number') {

                if (value < 1) {
                    setErrorValue({
                        ...errorValue, [id]: `please enter ${id} >0`
                    })
                    setEntry({
                        ...entry, [id]: 1
                    })
                } else {
                    setErrorValue({
                        ...errorValue, [id]: ``
                    })
                    setEntry({
                        ...entry, [id]: Number(value)
                    })
                }
            }
            if (type === 'text') {

                if (value.trim().length < 3) {
                    setErrorValue({
                        ...errorValue, [id]: `please enter ${id} > 2 letter`
                    })
                    setEntry({
                        ...entry, [id]: ''
                    })
                } else {
                    setErrorValue({
                        ...errorValue, [id]: ``
                    })
                    setEntry({
                        ...entry, [id]: value
                    })
                }
            }
        }
        if (nodeName === 'TEXTAREA') {

            if (value.trim().length < 20) {
                setErrorValue({
                    ...errorValue, [id]: `please enter ${id} > 19 letter`
                })
                setEntry({
                    ...entry, [id]: ''
                })
            } else {
                setErrorValue({
                    ...errorValue, [id]: ``
                })
                setEntry({
                    ...entry, [id]: value
                })
            }
        }
    }

    const sendSubmitHandler = e => {
        e.preventDefault()
        let numError=0
        Object.keys(errorValue).map(error=>{
            console.log(error)
            if(errorValue[error].trim().length>0){
                numError+=1
            }
        })
        console.log(numError)
        if(numError>0){
            console.log('found errors')
        }else{
            console.log(entry, errorValue)
        }
        
    }
    const form = () => {
        return <form onSubmit={sendSubmitHandler}>
            {!elements && <div></div>}
            {elements && elements.map((element, ind) => {
                if (element.name === 'input') {
                    return <Fragment key={ind}>
                        <Input title={element.title}
                            input={{
                                id: element.id,
                                type: element.type,
                                onChange: (e) => signvalue(e)
                            }} />
                    </Fragment>
                }
                if (element.name === 'textarea') {
                    return <Fragment key={ind}>
                        <Textarea title={element.title}
                            input={{
                                id: element.id,
                                onChange: (e) => signvalue(e)
                            }}
                        />
                    </Fragment>
                }
                if (element.name === "button") {
                    return <Fragment key={ind}>
                        <Button input={{
                            id: element.id
                        }} >{element.children}</Button>
                    </Fragment>
                }
            })}
        </form>
    }
    return { errorValue, entry, form }
}

export default useForm