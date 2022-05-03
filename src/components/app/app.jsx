import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Arkadiy K', salary: 3000, increase: false, stars: false,  id: 1},
                {name: 'Vasiliy E.', salary: 1000, increase: true, stars: false, id: 2},
                {name: 'John V.', salary: 5000, increase: false, stars: false, id: 3}
            ]
        }
    }

    onToggleIncrease = (id) => {
        console.log(`this increase ${id}`)
    }

    onToggleStars = (id) => {
        console.log(`this stars ${id}`)
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
            data: data.filter(item => item.id !== id)
            }
            
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        } 
        this.setState(({data}) =>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    
    render() {
        return (
            <div className="app">
                <AppInfo />
                
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise} 
                />
                
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;