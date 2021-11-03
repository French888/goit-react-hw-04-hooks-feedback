import PropTypes from "prop-types";

export function Statistic({ bad, neutral, good, total, positivePercentage }) {
  return (
    <>
      {total > 0 ? (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>PositivePercentage:{positivePercentage} %</li>
        </ul>
      ) : (
        <p>Here is nothing...</p>
      )}
    </>
  );
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
