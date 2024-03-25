import { useState } from "react";



const App = () => {
    const [fiyat, setfiyat] = useState(0);
    const [kar, setkar] = useState(0);
    const [sonuc, setsonuc] = useState(0);

    const hesapla = () => {
        const deger = fiyat * kar / 100 + fiyat;
        setsonuc(deger);
    }


    return (
        <>
            <label>Fiyat giriniz:</label> <input type="number" value={fiyat} onChange={(e) => setfiyat(e.target.value)} /><br />
            <label>Kar oranı giriniz:</label> <input type="number" value={kar} onChange={(e) => setkar(e.target.value)} /><br /><br />
            <button onClick={hesapla}>Hesapla</button><br /><br />
            <label>Satış fiyatı:</label><h1>{sonuc}</h1>


        </>
    )
}

export default App;