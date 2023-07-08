



const App = () => {

    console.log('Called');

    let BtnText = 'Click Here';

    const onBtnClick = () => {
        BtnText = 'React Hello'
        console.log(BtnText);
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