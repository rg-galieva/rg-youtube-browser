import React, {Component} from 'react'
import s from './_styles.css'

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            search_term: ''
        }
    }

    render() {
        return <input type="text" value={this.state.search_term} onChange={this.onInputChange} className={s.search_input} placeholder="Search"/>
    }

    onInputChange = (ev) => {
        this.setState({
            search_term: ev.target.value
        })
    }
}

export default SearchBar