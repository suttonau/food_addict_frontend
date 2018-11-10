class Location{
  constructor(name, description, address, image){
  this.name = name
  this.description = description
  this.address = address
  this.image = image
  }

  render(){
  let liName = document.createElement('li')
  liName.innerHTML = this.name

  let liDesc = document.createElement('li')
  liDesc.innerHTML = this.description
  return liName
  return liDesc
  }
}
