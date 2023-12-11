import { FeedbackBtn } from "./FeedbackBtn.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
        {options.map(option => {
          return (
            <FeedbackBtn
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </FeedbackBtn>
          );
        })}
      </div>
    )
}
