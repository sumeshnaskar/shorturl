import React, {useEffect, useState} from 'react'

import { Short } from '../components'

export function ShortContainer(){
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [error, setError] = useState('')
    const [pastResult, setPastResult] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            setError('Loading...')
            const fetchShortUrl = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            const response = await fetchShortUrl.json()
            if (!response.ok){
                const errMessage = `An error occured: ${response.status}`
                throw new Error(errMessage)
            }            
            pastResult ? 
            setPastResult([ 
                ...pastResult, 
                { url: response.result.original_link, shortUrl: response.result.short_link}
            ]) :
            setPastResult([
                { url: response.result.original_link, shortUrl: response.result.short_link}
            ])
            setShortUrl(response.result.short_link) 
            setUrl('')
            setError('')

        }catch(err){
            url.length < 1 ? setError('Please add a link') : setError(`${err}`)
            
        }      
    }

    function getLocalStorageData(){
        const prevResults = localStorage.getItem("resultArray")
        const result = JSON.parse(prevResults)
        return result
    }

    useEffect(()=>{
        pastResult.length > 0 && localStorage.setItem("resultArray", JSON.stringify(pastResult))
        setPastResult(getLocalStorageData())  
    },[shortUrl])

    return(
        <Short>
            <Short.Card>
                <Short.Form onSubmit={handleSubmit}>
                    <Short.Group>
                        <Short.Input 
                            placeholder = "Shorten a link here..."
                            value = {url}
                            error = {error}
                            onChange = {({target})=> {
                                setUrl(target.value) 
                                setError('')   
                            }}
                        />
                        <Short.Error>{error}</Short.Error>
                    </Short.Group>
                    <Short.Button type="submit">Shorten it!</Short.Button>
                </Short.Form>
            </Short.Card>
            {getLocalStorageData() && getLocalStorageData().slice(-3).reverse()
                .map((prevUrl, index) => (
                    <Short.Card key={`shortened-url-${index}`}>
                        <Short.Wrapper>
                            <Short.Inner>
                                <Short.Text>{prevUrl.url}</Short.Text>
                            </Short.Inner>
                            <Short.Break/>
                            <Short.Inner>
                                <Short.Text style = {{color: 'hsl(180, 66%, 49%)'}}>
                                    {prevUrl.shortUrl}
                                </Short.Text>
                                <Short.Button 
                                    onClick = {() => navigator.clipboard.writeText(prevUrl.shortUrl)}
                                >
                                    Copy
                                </Short.Button>
                            </Short.Inner>
                        </Short.Wrapper>
                    </Short.Card>
                ))
            }
        </Short>
    )
}