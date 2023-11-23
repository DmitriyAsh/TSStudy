import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

const App = () => {
    const users = [
        {
            id: 1,
            name: "Dmitry",
            email: "asd@gmail.com",
            address: { city: "Kemerovo", street: "Lenina", zipcode: "221133" },
        },
        {
            id: 1,
            name: "Po;ina",
            email: "qwe@gmail.com",
            address: {
                city: "Kemerovo",
                street: "Pushkina",
                zipcode: "222233",
            },
        },
    ];

    return (
        <div>
            <Card
                onClick={(num) => console.log("click", num)}
                variant={CardVariant.outlined}
                width='200px'
                height='200px'
            >
                <button>Button</button>
            </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;
