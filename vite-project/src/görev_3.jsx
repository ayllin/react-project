import { useState } from "react"


const App = () => {
    const [birim, setbirim] = useState(0);
    const [adet, setadet] = useState(0);
    const [toplam, settoplam] = useState(0);

    const hesapla = () => {
        const deger = birim * adet;
        settoplam(deger);
    }
    return (
        <>
            <label> Birim fiyatı:</label><input type="number" value={birim} onChange={(e) => setbirim(e.target.value)} /> <br /><br />
            <label> Adet:</label><input type="number" value={adet} onChange={(e) => setadet(e.target.value)} /> <br /><br />
            <button onClick={hesapla}>Hesapla</button> <br /><br />
            <label>Toplam tutar:</label><output>{toplam}</output>


        </>
    )
}

export default App