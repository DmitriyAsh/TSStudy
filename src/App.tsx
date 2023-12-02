import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div>
            <EventsExample />
            <Card
                onClick={(num) => console.log("click", num)}
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
