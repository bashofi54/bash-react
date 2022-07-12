import { useState } from "react";

const FunctionalComponent = ({basmalah}) => {

    const [value, setValue] = useState(0); // ---SEBENARNYA TIDAK ADA STATE DI FUNCTION TAPI BISA DENGAN HOOK

    const handplus = () => {
        setValue(value + 1);
    }
    const handminus = () => {
        if(value > 0)
        setValue(value - 1);
    }

    return (
        <div>
            <h1>Welcome to the new WORLD</h1>
            <h2>Happy Learning, {basmalah} </h2>
            <button onClick={handminus} >-</button>
            <span> {' '} {value} {' '} </span>
            <button onClick={handplus} >+</button>
            <h3>Function</h3>
        </div>
    )
}

//---NILAI DEFAULT PADA PROPS (dipakai ketika kita tidak menggunakan props)
FunctionalComponent.defaultProps = {
    basmalah: 'Bismillah!!!'
}

export default FunctionalComponent;