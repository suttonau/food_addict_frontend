class Meeting{
  constructor(id, name){
    this.id = id
    this.name = name
  }

  render(){
    return `
      <h3>${this.name}</h3>
      <p>Id: ${this.id}</p>
      <ul>Locations: </ul>`
  }
}

//add  after div <img src=>
