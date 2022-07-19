import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true
    }

    render() {
        setTimeout( () => {
            this.setState({
                isLoading: false
            })
        },3000)

        return (
            <div>
                { this.state.isLoading 
                ? <h1>Loading......</h1> 
                : <h1>Welcome to MERN class</h1> 
                }
            </div>
        )

        // const isLogin = false; !! ADA 3 CARA IF ELSE 1
        // if(isLogin) {
        //     return (
        //         <div>
        //             <h1>anda sudah login</h1> 
        //         </div>
        //     )
        // }else {
        //     return (
        //         <div>
        //             <h1>silahkan login terlebih dahulu</h1>
        //         </div>
        //     )
        // }

        // const isLogin = false; !! 2
        // let pesan = ' ';
        // if(isLogin) {
        //     pesan = 'anda sudah login'
        // }else {
        //     pesan = 'silahkan login terlebih dahulu'
        // }

        // return (
        //     <div>
        //         <h1>{pesan}</h1>
        //     </div>
        // )

        // const isLogin = false; //!! 3
        // return (
        //     <div>
        //         {isLogin ? <h1>anda sudah login</h1> : <h1>silahkan login terlebih dahulu</h1>}
        //     </div>
        // )
    }
}