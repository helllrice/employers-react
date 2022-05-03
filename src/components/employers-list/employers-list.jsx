import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleStars}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleStars={() => onToggleStars(id)}
            onToggleIncrease={() => onToggleIncrease(id)}/>
        )
    })
    
    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    )
}

export default EmployersList;