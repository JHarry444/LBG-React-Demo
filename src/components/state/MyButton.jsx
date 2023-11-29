function MyButton() {

    function sayYo() {
        alert("yo!");
    }

    return ( <button onClick={sayYo}>
        CLICK ME!
    </button> );
}

export default MyButton;