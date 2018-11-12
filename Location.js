class Location{
  constructor(name, description, address, image){
  this.name = name
  this.description = description
  this.address = address
  this.image = image
  }

  render(){
  let liName = document.createElement('dt')
  liName.innerHTML = this.name

  let liDesc = document.createElement('dd')
  liDesc.innerHTML = `-${this.description}`

  let imgEl = document.createElement('img');
  imgEl.src = this.image;


  return { locationName: liName, locationDesc: liDesc };


  }
}
//
// ret = Location.render()
// ret.arg1 kjsdfjlk
