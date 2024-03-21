import { formatter } from "../../../utils/investement";

export default function Results({results}) {

    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    
    return (
        <table id="results">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Annual Interest</th>
                    <th>Investment Value</th>
                    <th>Accumulated Interest</th>
                    <th>Investment Capital</th>
                </tr>

            </thead>
            <tbody>
                { results.map(result => {
                    const accumInterest = result.valueEndOfYear - result.year * result.annualInvestment - initialInvestment;
                    const investmentCapital = result.valueEndOfYear - accumInterest;
                    return <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(accumInterest)}</td>
                        <td>{formatter.format(investmentCapital)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}