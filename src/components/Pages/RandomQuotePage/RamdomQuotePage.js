import React from 'react'
import axios from 'axios'

import RandomQuoteCard from './RandomQuoteCard/RandomQuoteCard'
import ActionButton from '../../Shared/ActionButon/ActionButton'

class RandomQuotePage extends React.Component {
    constructor() {
        super()
        this.state = {
            randomQuote: {},
            error: '',
        }
    }

    getRandomQuote = async () => {
        // https://github.com/axios/axios
        // https://alligator.io/react/axios-react/#get-requests
        axios.get(`https://api.quotable.io/random`)
        .then(res => this.setState({
            randomQuote: res.data,
            error: ''
        }))
        .catch(err => {
            console.error(err)
            this.setState({
                error: 'some this went wrong',
                randomQuote: {}
            })
    })

    // option 2 with async await
    // const res = await axios.get('https://api.quotable.io/random')
    // this.setState({randomQuote: res.data})
    
    // option 3 without axios
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // fetch('https://api.quotable.io/random')
    // .then(res => res.json())
    // .then(res => this.setState({randomQuote: res.data}))
    }

    render() {
        return (
            <div>
                <RandomQuoteCard quote={this.state.randomQuote} error={this.state.error} />
                <ActionButton onUserClick={this.getRandomQuote} txt="get quote" />
            </div>
        )
    }
}

export default RandomQuotePage