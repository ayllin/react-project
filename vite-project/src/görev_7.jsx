import { useState } from "react"



const App = () => {
    const [dogum, setdogum] = useState(0);
    const [sonuc, setsonuc] = useState(0);

    const hesapla = () => {
        const deger = 2024 - dogum;

        setsonuc(deger);
    }
    return (
        <>
            <label>Doğum Yılı:</label> <input type="number" value={dogum} onChange={(e) => setdogum(e.target.value)} /> <br /><br />
            <button onClick={hesapla}>Hesapla</button><br /><br />
            <output>{sonuc}</output>



        </>
    )
}

export default App