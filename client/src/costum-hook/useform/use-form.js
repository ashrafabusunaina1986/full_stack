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
    const [entry, setEntry] = useState(init)
    const [errorValue, setErrorValue] = useState(init(true))

    const form = () => {
        return <Fragment>
            {!elements && <div></div> }
            {elements && elements.map((element, ind) => {
                if (element.name === 'input') {
                    return <Fragment key={ind}>
                        <Input title={element.title}
                            input={{
                                id: element.id,
                                type: element.type
                            }} />
                    </Fragment>
                }
                if (element.name === 'textarea') {
                    return <Fragment key={ind}>
                        <Textarea title={element.title}
                            input={{
                                id: element.id
                            }}
                        />
                    </Fragment>
                }
                if (element.name === "button") {
                    return <Fragment key={ind}>
                        <Button input={{
                            id:element.id
                        }} >{element.children}</Button>
                    </Fragment>
                }
            })}
        </Fragment>
    }
    return { errorValue, entry, form }
}

export default useForm