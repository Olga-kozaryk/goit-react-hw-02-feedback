export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    )
}
