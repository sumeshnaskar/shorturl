import React, {useState} from 'react'

import { Short } from '../components'

export function ShortContainer(){
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        url.length < 1 ? setError('Please add a link') : setError('')
        const fetchShortUrl = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${url}`, 
            { 
                method: 'POST',
                
            }
        )
        const response = await fetchShortUrl.json()
        console.log(response.result.short_link, response.ok)
    }

    return(
        <Short>
            <Short.Card>
                <Short.Form onSubmit={handleSubmit} method='POST'>
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
        </Short>
    )
}