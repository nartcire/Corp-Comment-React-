import HashtagItem from "./Hashtagitem";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

export default function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectedCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
