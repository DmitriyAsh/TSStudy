import Card, { CardVariant } from "./components/Card";

const App = () => {
    return (
        <div>
            <Card
                onClick={() => console.log("click")}
                variant={CardVariant.outlined}
                width='200px'
                height='200px'
            >
                <button>Button</button>
            </Card>
        </div>
    );
};

export default App;
