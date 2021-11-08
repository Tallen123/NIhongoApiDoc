import './App.css';
import Pannel from './Components/Pannel';
import Testapiform from './Components/Testapiform'
function App() {
  return (
    <div className="App">
      <div className="Name">
        <h1>Nihongo.Net</h1>
        <h1 className="NameC">API Documentation</h1>
      </div>
        <div className="PannelDiv">
          <Pannel text='This API is still is development and is subject to change.'text2ndLine='The API consists of Hiragana, Katakana, Kanji, Vocabulary, Numbers and Grammar.The endpoints are below, Kanji it self is the more complicated one as this contains JLPT N1-N5 aswell as GRADES 1-6'/>
          <Pannel text="HIRAGANA"text2ndLine="Hiragana after the base url will return a JSON object of all the character aswell as the english/romaji"/>
          <Pannel text="KATAKANA"text2ndLine="Katakana after the base url will return a JSON object of all the character aswell as the english/romaji"/>
          <Pannel text="KANJI"text2ndLine="Kanji after the base url will return a JSON object of all the characters in JLPT N1-N5 in a object seperate to GRADES which also returns in a JSON object"/>
          <Pannel text="NUMBERS"text2ndLine="Numbers after the base url will return a JSON object of most of them as this is still a work in progress"/>
          <Pannel text="Vocabulary and Grammar"text2ndLine="These two are a work in progress and will be added soon"/>
          <Testapiform/>
        </div>
    </div>
  );
}

export default App;
