import React, {useState} from 'react'

import { Short } from '../components'

export function ShortContainer(){
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [error, setError] = useState('')
    const [copy, setCopy] = useState('Copy')

    const handleSubmit = async (event) => {
        event.preventDefault()
        url.length < 1 ? setError('Please add a link') : setError('')
        try{
            const fetchShortUrl = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            const response = await fetchShortUrl.json()
            if (!response.ok){
                const errMessage = `An error occured: ${response.status}`
                throw new Error(errMessage)
            }
            setShortUrl(response.result.short_link)
        }catch(err){
            setError(err.errMessage)
        }
        
    }
    


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
            <Short.Card>
                <Short.Wrapper>
                    <Short.Inner>
                        <Short.Text>{url}</Short.Text>
                    </Short.Inner>
                    <Short.Break/>
                    <Short.Inner>
                        <Short.Text style = {{color: 'hsl(180, 66%, 49%)'}}>{shortUrl}</Short.Text>
                        <Short.Button onClick = {()=>setCopy('Copied!')}>{copy}</Short.Button>
                    </Short.Inner>
                </Short.Wrapper>
            </Short.Card>
        </Short>
    )
}