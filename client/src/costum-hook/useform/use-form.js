import React, { Fragment, useEffect, useState } from 'react'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import classes from './useform.module.css'
import useHttp from '../usehttp/use-http'

const useForm = (elements) => {
    const { isLoading, reqError, sendRequest: save } = useHttp()
    const [post, setPost] = useState(null)
    const [is, setis] = useState(false)
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
        setis(false)
        const { id, value, type, nodeName } = e.target
        if (nodeName === 'INPUT') {
            if (type === 'number') {

                setEntry({
                    ...entry, [id]: Number(value)
                })
                if (Number(value) < 1) {
                    setErrorValue({
                        ...errorValue, [id]: `please enter ${id} >0`
                    })
                } else {
                    setErrorValue({
                        ...errorValue, [id]: ``
                    })
                }
            }
            if (type === 'text') {

                setEntry({
                    ...entry, [id]: value
                })
                if (value.trim().length < 3) {
                    setErrorValue({
                        ...errorValue, [id]: `please enter ${id} > 2 letter`
                    })
                } else {
                    setErrorValue({
                        ...errorValue, [id]: ``
                    })
                }
            }
        }
        if (nodeName === 'TEXTAREA') {

            setEntry({
                ...entry, [id]: value
            })
            if (value.trim().length < 20) {
                setErrorValue({
                    ...errorValue, [id]: `please enter ${id} > 19 letter`
                })
            } else {
                setErrorValue({
                    ...errorValue, [id]: ``
                })
            }
        }
    }

    const sendSubmitHandler = e => {
        setis(true)
        e.preventDefault()
        const error = {}
        Object.keys(entry).map(item => {
            const it = entry[item]
            if (typeof it === 'number') {
                if (it < 1) {
                    error[`${item}`] = `please enter ${item} >0`
                }
            }
            if (typeof it === 'string') {
                if (item === 'name' && it.trim().length < 3) {
                    error[`${item}`] = `please enter ${item} > 2 letter`
                }
                if (item === 'message' && it.trim().length < 20) {
                    error[`${item}`] = `please enter ${item} > 19 letter`
                }
            }
        })
        setErrorValue(error)
    }
    useEffect(() => {
        let numError = 0
        Object.keys(errorValue).map(error => {
            if (errorValue[error].trim().length > 0) {
                numError += 1
            }
        })
        if (numError > 0) {
            return 
        }
        if (entry.name === '' || entry.price === 0 || entry.message === '') {
            return
        }

        save({
            url: 'http://localhost:4011/post_data',
            method: "POST",
            body: entry,
            headers: {
                'Content-Type': 'application/json'
            }
        }, setPost)
        setEntry(init)

    }, [is])
    const form = () => {
        let errorNum = 0
        Object.keys(errorValue).map(item => {
            if (errorValue[item] !== '') {
                errorNum += 1
            }
        })
        return <form onSubmit={sendSubmitHandler} className={classes.form}>
            {errorNum > 0 && <div className={classes.errors}>
                {
                    Object.keys(errorValue).map((item, ind) => {
                        return errorValue[item] && <p key={ind}>{errorValue[item]} </p>
                    })
                }
            </div>}
            {!elements && <div></div>}
            {elements && elements.map((element, ind) => {
                if (element.name === 'input') {
                    return <Fragment key={ind}>
                        <Input title={element.title}
                            input={{
                                id: element.id,
                                type: element.type,
                                onChange: (e) => signvalue(e),
                                value:entry[element.id]===0?'':entry[element.id]
                            }} />
                    </Fragment>
                }
                if (element.name === 'textarea') {
                    return <Fragment key={ind}>
                        <Textarea title={element.title}
                            input={{
                                id: element.id,
                                onChange: (e) => signvalue(e),
                                value:entry[element.id]
                            }}
                        />
                    </Fragment>
                }


            })}
            <Fragment >
                <Button  >Click</Button>
            </Fragment>
        </form>
    }
    return { errorValue, post, form }
}

export default useForm