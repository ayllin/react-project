import { useState } from "react"


const App = () => {
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [c, setc] = useState(0);
    const [sonuc, setsonuc] = useState(0);

    const hesapla = () => {
        const deger = 2 * b - 4 * a * c;
        setsonuc(deger);
    }
    return (
        <>
            <label>a:</label><input type="number" value={a} onChange={(e) => seta(e.target.value)} /> <br /><br />
            <label>b:</label><input type="number" value={b} onChange={(e) => setb(e.target.value)} /> <br /><br />
            <label>c:</label><input type="number" value={c} onChange={(e) => setc(e.target.value)} /> <br /><br />
            <button onClick={hesapla}>Hesapla</button> <br /><br />
            <label>2b-4ac=</label><output>{sonuc}</output>

        </>
    )
}

export default App