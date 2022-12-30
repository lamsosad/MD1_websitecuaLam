class Product {
    id;
    image;
    name;
    price;


    constructor(id, image, name, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}