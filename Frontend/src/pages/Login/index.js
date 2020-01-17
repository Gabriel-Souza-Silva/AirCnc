import React ,{useState} from 'react';

import api from '../../services/api'

//history poide ser acessado com this.props.history
export default function Login({history}){
    
    const [email, setEmail] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/sessions',{ email })

        const { _id } = response.data;

        localStorage.setItem('user',_id)

        history.push('./dashboard')
    } 



    return (
        <>  
            <p>Conheça como o <strong>React</strong> é o mais legal framework por ser em <strong>Javascript</strong></p>
        
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    onChange={event => setEmail(event.target.value)} 
                    placeholder="Seu melhor E mail"/>        
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>   
    )
};
