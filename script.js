



const App = () => {

    console.log('Called');

    let [BtnText, setBtnText] = React.useState('Click Here');
    const onBtnClick = () => {
        setBtnText('React Hello')
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