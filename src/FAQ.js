import { useState } from 'react';
import './App.css';
import { allAnswers } from './allAnswers';
import back from './back.png';
import next from './next.png';
import Music from './Music';

function FAQ() {

    const [answer, setAnswer] = useState(0);
    const {title, text} = allAnswers[answer];
    
    const previousAnswer = () => {
        setAnswer((answer => {
            answer --;
            if (answer < 0) {
                return allAnswers.length - 1;
            }
            return answer
        }))
    }
    const nextAnswer = () => {
        setAnswer((answer => {
            answer ++;
            if (answer > allAnswers.length - 1) {
                answer = 0;
            }
            return answer
        }))
    }
    return(
        <div>
            <Music/>
        <div className="answer-container">
            <button className="btn-answer" onClick={previousAnswer}>
                <img src={back} className="direction" alt="Back"/></button>
            <div className="text-areaAnswer">
                <p className="title-answer">{title}</p>
                <p className="text-answer">{text}</p>
            </div>
            <button className="btn-answer" onClick={nextAnswer}>
                <img src={next} className="direction" alt="Next"/></button>
        </div>
        </div>
    )
}
export default FAQ