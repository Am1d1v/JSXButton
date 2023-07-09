



const App = () => {

    const [BtnText, setBtnText] = React.useState('Click Here');
    const [classesList, setClassesList] = React.useState('');


    const onBtnClick = () => {
        setBtnText('React Hello')
        setClassesList('btn')
};

    return (
        <div className="app">
        <button className={classesList} onClick={onBtnClick}>{BtnText}</button>
        </div>
      )
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />)