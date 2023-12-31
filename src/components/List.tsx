interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

// const List: <T>(props: ListProps<T>) => React.ReactElement = props => {
//     return (
//         <div>
//             {props.items.map(props.renderItem)}
//         </div>
//     )
// };

export default function List<T>(props: ListProps<T>) {
    return <div>{props.items.map(props.renderItem)}</div>;
}
