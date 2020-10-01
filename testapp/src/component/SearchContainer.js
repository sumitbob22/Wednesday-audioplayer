import React,{ Component } from 'react';
import {connect} from'react-redux';
import {SearchBar} from './SearchBar';
import {searchRequest}from '../actions/searchActions';
import {MusicCard} from './musicCard'

class SearchContainer extends Component {
        
    state = {
        searchQuery: ''
    }

    onType = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    onSearchHandler = () => {
        const{searchQuery} = this.state; 
        this.props.searchRequest(searchQuery);
    }

    render() {
        const { searchQuery } = this.state;
        const {resultCount} = this.props;
        return ( 
        <>
            <div className="header">
                <SearchBar 
                    text = { searchQuery }
                    onTypeHandler = { this.onType }
                />  
                <button className="search-button" disabled={!searchQuery} onClick = { this.onSearchHandler }>Search </button> 
            </div>
            <p className='search-count'>Results:{resultCount || ' 0'}</p>
            <hr/>
            {
                resultCount?
                    <MusicCard data = {this.props.results}/>
                :
                    <h1>Search for Music</h1>
            }
        </>
        )
    }
}

const mapStateToProps = state => {
    return{ 
        results: state.searchReducer.results,
        resultCount:state.searchReducer.resultCount
    }
}
    
const mapDispatchToProps = dispatch => {
    return {
      searchRequest: (data) => dispatch(searchRequest(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);