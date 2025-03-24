import Container from "./components/layout/Container";
import FeedbackItemsContextProvider from "./components/contexts/FeedbackItemsContextProvider";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";

function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
