/* Cara Keempat memberikan Style dengan menambahkan Class Module Css baru*/

import React from "react";
import style from './index.module.css';

export default class Module extends React.Component {

    render() {
        return (
            <div>
                <button className={`${style.btn} ${style.info} `}>Go Bismillah!!</button>
            </div>
        )
    }
}


/* Menggunakan cara ini juga terdapat kendala yaitu
jika halaman sudah terlalu besar. proses debbugingnya menjadi
sulit karena nama class yang di hasilkan random */