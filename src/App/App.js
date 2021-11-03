import React, { useState } from "react";
import { Section } from "../components/Section/Section";
import { Feedback } from "../components/Feedback/Feedback";
import { Statistic } from "../components/Statistic/Statistic";

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);

  const options = ["good", "bad", "neutral"];

  const handleCount = ({ target }) => {
    switch (target.name) {
      case "good":
        setGoodFeedback((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutralFeedback((prevState) => prevState + 1);
        break;

      case "bad":
        setBadFeedback((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return goodFeedback + badFeedback + neutralFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((goodFeedback / totalFeedback) * 100) : 0;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Section title={"Please leave your feedback"}>
          <Feedback options={options} onLeaveFeedback={handleCount} />
        </Section>

        <Section title="Statistics">
          <Statistic
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </header>
    </div>
  );
}

export default App;
