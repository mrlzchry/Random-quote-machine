import { useState } from 'react';
import './QuoteBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrTwitter } from 'react-icons/gr';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const quotes = [
  {quotes:"Fly like a butterfly, sting like a bee. The hands can't hit what the eyes can't see.",
  author: "Muhammad Ali"}, 
  {quotes:"Never, never, never give up!",
  author: "Winston Churchill"},
  {quotes:"Be like water...",
  author: "Bruce Lee"},
  {quotes:"Fortune favors the bold",
  author: "Virgil"},
  {quotes:"You must be the change you wish to see in the world.",
  author: "Mahatma Gandhi"},
]

const colors = ['#F94144', '#F3722C', '#F8961E', '#F8961E', '#F9844A', '#F9C74F'
, '#90BE6D', '#43AA8B', '#4D908E', '#577590', '#277DA1']

// const numArray = [];
// const createArray = (max) => {
//   for (let i = 0; i < max; i++) {
//     numArray[i] = i;
//   }
// }

function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;

const Quote = () => {
 
const [state, setState] = useState({
  quote: quotes[Math.floor(Math.random() * 4)]["quotes"],
  color: colors[Math.floor(Math.random()* 11)]
});  

  const backgroundColor = {
      backgroundColor: state.color,
      transition: "background-color 2s"
  };
  
  const changeColor = () => {
    setState(previousState => {
      return { ...previousState, color: colors[Math.floor(Math.random()* 11)] }})
    
  };

  const randomQuote = () => { 
    setState(previousState => {
      return { ...previousState, quote: quotes[Math.floor(Math.random() * 4)]["quotes"] }})
      
  };

  const updateState = () => {
    changeColor();
    randomQuote();
  }

  const changeAuthor = () => {
    for (let i = 0; i < quotes.length; i++) {
      if (state.quote === quotes[i]['quotes']) {
        return quotes[i]['author'];
      }
    }
  }
  
  return(
    <div style={backgroundColor}>
      <div id="quote-box" >
          <div id="container" className="center">
                <div className="Box ">
                    <h1 id="text" className="centerquote">{state.quote}</h1>
                    <h5 id='author'>{changeAuthor()}</h5>
                </div>
                <ThemeProvider theme={theme}>
                <Button id='new-quote' className='Button' color='neutral' variant="contained" onClick={updateState}>Click me for random quote!</Button>
                </ThemeProvider>
                {/* <button id='new-quote' type="button" className="btn btn-primary" onClick={updateState}>Click me for random quote!</button> */}
                 <a id='tweet-quote' href='twitter.com/intent/tweet' target="_blank"><GrTwitter />Tweet</a>
                 <br /><h7>by Ammarul</h7>
          </div>
      </div>
    </div>
  )
};

