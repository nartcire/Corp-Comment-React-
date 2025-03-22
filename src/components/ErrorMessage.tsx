type messageProps = {
  message: string;
};

export default function ErrorMessage({ message }: messageProps) {
  return <div>{message}</div>;
}
