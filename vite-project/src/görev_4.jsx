import { useState } from "react"



const App = () => {
    const [sayi, setsayi] = useState(0);
    const [karesi, setkaresi] = useState(0);

    const hesapla = () => {
        const deger = sayi * sayi;
        setkaresi(deger);
    }
    return (
        <>
            <label>Sayı:</label><input type="number" value={sayi} onChange={(e) => setsayi(e.target.value)} /> <br /><br />
            <button onClick={hesapla}>Hesapla</button>
            <label> Karesi:</label><output>{karesi}</output>
        </>
    )
}

export default App