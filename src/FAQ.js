import { useState } from 'react';
import './App.css';
import { data2 } from './data2';

function FAQ() {

    const [answer, setAnswer] = useState(0);
    const {title, text} = data2[answer];

    const previousAnswer = () => {
        setAnswer((answer => {
            answer --;
            if (answer < 0) {
                return data2.length - 1;
            }
            return answer
        }))
    }
    const nextAnswer = () => {
        setAnswer((answer => {
            answer ++;
            if (answer > data2.length - 1) {
                answer = 0;
            }
            return answer
        }))
    }
    return(
        <div className="answer-container">
            <button className="btn-answer" onClick={previousAnswer}>Назад</button>
            <div className="text-area">
                <h3 className="title-answer">{title}</h3>
                <p className="text-answer">{text}</p>
            </div>
            <button className="btn-answer" onClick={nextAnswer}>Вперёд</button>
        </div>
    )
}
export default FAQ