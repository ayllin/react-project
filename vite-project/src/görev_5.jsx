import { useState } from "react"




const App = () => {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [sonuc, setsonuc] = useState(0);

    const hesaplama = () => {
        const deger = (x * x) - (y * y);
        setsonuc(deger);
    }
    return (
        <>
            <label>X:</label><input type="number" value={x} onChange={(e) => setx(e.target.value)} /> <br /><br />
            <label>X:</label><input type="number" value={y} onChange={(e) => sety(e.target.value)} /> <br /><br />
            <button onClick={hesaplama}>Hesapla</button> <br /><br />
            <label>X ve Y değerlerinin kareleri farkı:</label><output>{sonuc}</output>
        </>
    )
}

export default App