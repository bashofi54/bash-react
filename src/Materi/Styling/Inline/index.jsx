// Cara ketiga memberikan style dengan gaya INLINE (langsung masuk ke halaman HTML) DAN mengatasi Global Naming Scop dari car ayang kedua tadi
// Dan harus berupa object java script

const Inline = () => {
    const style = {
        color: "lightcoral",
        fontSize: "48px"
    }
    return (
        <h1 style={style}>YOU Can Do IT!</h1>
    )
}

export default Inline;

// tapi juga ada bebebrapa PROBLEM menggunakan INLINE STYLE
// Banyak style css yang tidak support 
// @media (media query yang buat responsive)
// @keyframes (untuk membuat animasi)
// :hover
// Font
// autoprefixer