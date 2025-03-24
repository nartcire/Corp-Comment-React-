import ErrorMessage from "../ErrorMessage";
import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  isLoading: boolean;
};

export default function FeedbackList({
  feedbackItems,
  errorMessage,
  isLoading,
}: FeedbackListProps) {
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
