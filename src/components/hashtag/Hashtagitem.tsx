type HashtagItemProp = {
  company: string;
  onSelectedCompany: (company: string) => void;
};

export default function HashtagItem({
  company,
  onSelectedCompany,
}: HashtagItemProp) {
  return (
    <li>
      <button onClick={() => onSelectedCompany(company)}>#{company}</button>
    </li>
  );
}
