import React, {Component} from 'react'
import s from './_styles.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search_term: ''
        }
    }

    getVideos = (ev) => {
        ev.preventDefault()
        this.props.onSearchChanged(this.state.search_term)
    }

    render() {
        return (
            <form onSubmit={this.getVideos}>
                <input type="text" value={this.state.search_term}
                            className={s.search_input}
                            placeholder="Search"
                            onChange={this.onInputChange}/>
            </form>
        )
    }

    onInputChange = (ev) => {
        this.setState({
            search_term: ev.target.value
        })
    }
}

export default SearchBar