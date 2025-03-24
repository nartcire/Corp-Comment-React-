import ErrorMessage from "../ErrorMessage";
import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function FeedbackList() {
  const {
    isLoading,
    errorMessage,
    filteredFeedbackItems: feedbackItems,
  } = useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
