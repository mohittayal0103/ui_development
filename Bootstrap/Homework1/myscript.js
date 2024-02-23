class MyIntro {
    constructor() { 
        this.intro = "Hi, I am Mohit Tayal. I am 24 Years old and jobless. Eventhough, I have 2 years of exerience as a Data analyst. And in last 1 year when I was jobless I had many experiences. ";
    }

    getItem = () => {
        let data = "<img src='4.jpg' class='shadow-lg img-fluid img-thumbnail mb-4'/>";
        document.getElementById("image").innerHTML = data;

        let temp = "<p class='text-dark bg-light p-5 rounded text-center mb-5'>"+this.intro+"<p>";
        document.getElementById("intro").innerHTML = temp;
    }
}

const obj1 = new MyIntro();