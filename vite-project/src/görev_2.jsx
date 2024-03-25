import { useState } from "react"



const App = () => {
    const [kısa, setkısa] = useState(0);
    const [uzun, setuzun] = useState(0);
    const [cevre, setcevre] = useState(0);
    const [alan, setalan] = useState(0);

    const hesapla = () => {
        const deger1 = kısa * uzun;
        setalan(deger1);
        const deger2 = (2 * kısa) + (2 * uzun);
        setcevre(deger2);
    }

    return (
        <>
            <label>Alanı ve çevresi hesaplanacak olan dikdörtgen için;</label><br />
            <label>Kısa kenar:</label><input type="number" value={kısa} onChange={(e) => setkısa(e.target.value)} /> <br />
            <label>Uzun kenar:</label><input type="number" value={uzun} onChange={(e) => setuzun(e.target.value)} /> <br />
            <button onClick={hesapla}>Hesapla</button><br />
            <label>Alan:</label><output>{alan}</output><br />
            <label>Çevre:</label><output>{cevre}</output><br />
        </>
    )
}

export default App