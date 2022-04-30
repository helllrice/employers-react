import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


function app() {
    
    const data = [
        {name: 'Arkadiy K', salary: 3000, increase: false, id: 1},
        {name: 'Vasiliy E.', salary: 1000, increase: true, id: 2},
        {name: 'John V.', salary: 5000, increase: false, id: 3}
    ];
    
    return (
        <div className="app">
            <AppInfo />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            
            <EmployersList data={data}/>
            
            <EmployersAddForm />
        </div>
    );
}

export default app;