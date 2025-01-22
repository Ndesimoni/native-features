class Place {
  constructor(title, imageUrl, address, location) {
    this.title = title;
    this.location = location;
    this.address = address;
    this.imageUrl = imageUrl;
    this.id = new Date().toString()+Math.random().toString()
  }
}
