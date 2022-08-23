class Title extends React.Component {
    render(){
        return (
            <span><strong>Why is the world called the world?</strong></span>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Title />);