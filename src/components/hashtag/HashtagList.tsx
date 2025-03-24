import HashtagItem from "./Hashtagitem";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function HashtagList() {
  const { companyList, handleSelectedCompany } = useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectedCompany={handleSelectedCompany}
        />
      ))}
    </ul>
  );
}
