import React, { useState } from 'react'

const useHttp = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [reqError,setReqError]=useState(null)

    const sendRequest=async(requestConfig,applyData)=>{
        setIsLoading(true)
        const response=await fetch(requestConfig.url,{
            method:requestConfig.method?requestConfig.method:'GET',
            body:requestConfig.body?JSON.stringify(requestConfig.body):null,
            headers:requestConfig.headers?requestConfig.headers:{}
        })

        if(!response.ok)throw new Error('Something went wrong')
        try {
            const data=await response.json()
            setIsLoading(false)
            applyData(data)
        } catch (error) {
            setReqError(error.message)
        }
        
    }
    return {
        isLoading,
        reqError,
        sendRequest
    }
}

export default useHttp