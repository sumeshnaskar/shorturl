import React, {useState} from 'react'

import { Short } from '../components'

export function ShortContainer(){
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        url.length < 1 ? setError('Please add a link') : setError('')
    }

    return(
        <Short>
            <Short.Card>
                <Short.Form onSubmit={handleSubmit} method='POST'>
                    <Short.Input 
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={({target})=> {
                            setUrl(target.value) 
                            setError('')
                        }}
                    />
                    {error && <Short.Error>{error}</Short.Error>}
                    <Short.Button type="submit">Shorten it!</Short.Button>
                </Short.Form>
            </Short.Card>
        </Short>
    )
}