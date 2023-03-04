import { MathJax } from 'better-react-mathjax';
import { Badge } from 'react-bootstrap';

export default function QuestionList({ data, number }) {
    return (
        <Badge 
            bg="secondary" 
            as="Button" 
            className="my-1 btn disabled-cursor"  
            style={{ 
                height: '20vh', 
                backgroundColor: 'grey', 
                fontWeight:'bold', 
                fontSize:'15px', 
                cursor:'disabled',  
                width: '100%',
                overflow: 'auto',
            }}
        >
            <li>
                <MathJax>{`Q${number}.`}</MathJax>
            </li>
            {data.map(({ QuestionID, Question }) => (
                <li key={QuestionID} >
                    <MathJax>{Question}</MathJax>
                </li>
            ))}
        </Badge>
    );
}
