import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG");
    };

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("DROP");
    };

    return (
        <div>
            <input
                value={value}
                onChange={changeHendler}
                type='text'
                placeholder='Controlled'
            />
            <input ref={inputRef} type='text' placeholder='Uncontrolled' />
            <button onClick={clickHandler}>Button</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{ width: 200, height: 200, background: "gray" }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? "green" : "gray",
                    marginTop: 15,
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
