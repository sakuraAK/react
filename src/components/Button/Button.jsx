
export default function Button({children, clickHandler}) {
    // console.log("Button is loading");
    // const clickHandler = () => {console.log(`${children} clicked`)};
    // function clickHandler() {
    //     console.log(`${children} clicked`);
    // }

    return (
        <li><button onClick={clickHandler}>{children}</button></li>
    );
}