import './TipResult.css';

export default function TipResult({}) {
    let percent = 25;
    let amount = 26.79;
    let answer = amount * percent / 100;

    return (
        <tip-result>
            {percent}% of{' '}
            ${amount.toFixed(2)} is{' '}
            ${answer.toFixed(2)}
        </tip-result>
    );
}