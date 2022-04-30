import './employers-list-item.css'
import { Component } from 'react'

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            stars: false,
        }
    }
    
    onIncrease = () => {
            this.setState(({increase}) => ({
                increase: !increase,
            }))
    }

    onStars = () => {
            this.setState(({stars}) => ({
                stars: !stars,
            }))
    }
    
    render () {
        const {name, salary} = this.props;
        const {increase} = this.state;
        const {stars} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (stars) {
            classNames += ' like'
        }
        
        return (
            <li className={classNames}>
                <span 
                className="list-group-item-label"
                onClick={this.onStars}
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}    
    



export default EmployersListItem;