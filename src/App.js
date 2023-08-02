import { useEffect, useState } from 'react';
import './App.css';
import { IntlProvider, FormattedMessage } from "react-intl"

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var."
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new message."
  }
}
function App() {
  const defaultLocale = navigator.language;
  const [locale, setLocale] = useState(localStorage.getItem("locale") || defaultLocale.includes("tr") ? "tr-TR" : "en-US")
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale])
  return (
    <div className="App">
      <IntlProvider messages={messages[locale]}>
        <FormattedMessage id="title" />

        <br />
        <FormattedMessage id="description" values={{count:5}} />
        <br />
        <br />

        <button onClick={() => setLocale("tr-TR")}>tr-TR</button>
        <button onClick={() => setLocale("en-US")}>en-US</button>
      </IntlProvider>
    </div>
  );
}

export default App;
