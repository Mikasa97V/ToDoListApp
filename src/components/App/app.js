import React, { Component } from 'react';
import AppHeader from '../AppHeader/appHeader';
import Clock from '../Clock/Clock';
import Example from '../PopUpWindow.jsx/PopUpWindow';
import PostAddForm from '../PostAddForm/postAddForm';
import PostList from '../PostList/postList';
import PostStatusFilter from '../PostStatusFilter/postStatusFilter';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import SearchPanel from '../SearchPanel/searchPanel';
import './app.css';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Go to learn React', important: true, done: false, deleteAllItems: false, id: 1},
                { label: 'Next find the job', important: true, done: false, deleteAllItems: false,id: 2},
                { label: 'And all be ok!', important: true, done: false, deleteAllItems: false,id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index +1)];
            return{
                data: newArr
            }
            
        });
    }
    deleteAllItems(){
        this.setState(({data}) => {
            const allItems = data.length;
            const newArr = [...data.slice(0, 0), ...data.slice(0 + allItems)];
            return{
                data: newArr
            }
        });
    }

    addItem(body){
        
        const newItem = {
            label: body,
            important: true,
            id: this.maxId++,
            notification: false
        }
        if(body !== ""){
            
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
            
        }
    }
    addNotification(body){
        let notification = false;
        if(body !== ""){
            notification = true;
            return notification;
        }
    }
    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
        })
    }
    onToggleDone(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, done: !old.done};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) =>{
            return item.label.indexOf(term) > -1
        });
    }

    filterPosts(items, filter){
        if(filter === 'done') {
            return items.filter(item => item.done)
        } else {
            return items
        }
    }


    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const done = data.filter(item => item.done).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
        return (
            <div className="app">
                <div id="AppHeader">
                <AppHeader 
                done={done}
                allPosts={allPosts}/>
                </div>
                <div className="search-panel d-flex">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostAddForm 
                    onAdd={this.addItem}
                    onDeleteAllItems={this.deleteAllItems}
                    />
                <PostList
                    posts={visiblePosts.filter(item => this.state.filter === "all" ? !item.done : item)}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <Example onAddNotification={this.addNotification} />
                <ScrollUpButton/>
                <Clock/>
            </div>
        )
    }
}