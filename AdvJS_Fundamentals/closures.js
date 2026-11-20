function outerFunction() {

    let name = "Emon";

    function innerFunction() {

        console.log(name);

    }

    innerFunction();

}

outerFunction();