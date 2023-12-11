import { StatisticsList } from "./StatisticsList.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticsList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>PositivePercentage: {positivePercentage} %</li>
        </StatisticsList>
    );
};
