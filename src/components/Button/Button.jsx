
export default function Button({children, clickHandler, buttonClass}) {
    // console.log("Button is loading");
    // const clickHandler = () => {console.log(`${children} clicked`)};
    // function clickHandler() {
    //     console.log(`${children} clicked`);
    // }
    let isClicked = true;


    return (
        <li><button className={buttonClass} onClick={clickHandler}>{children}</button></li>
    );
}