import goldPotImage from "../../../assets/pot-of-gold.png";

export default function Header() {
    return (
        <div id="header">
            <header>
                <img src={goldPotImage} alt="gold" />
                <h1>Investment Calculator</h1>
            </header>
        </div>

    );
}
  