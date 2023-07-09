



const App = () => {

    let [BtnText, setBtnText] = React.useState('Click Here');
    console.log(BtnText);

    const onBtnClick = () => {
        setBtnText(`React Hello ${Math.round(Math.random() * 100)}`)
};

    return (
        <div className = "app">
        <button onClick={onBtnClick}>{BtnText}</button>
        </div>
      )
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />)