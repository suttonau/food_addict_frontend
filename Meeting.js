class Meeting{
  constructor(id, name){
    this.id = id
    this.name = name
  }

  render(){
    return `
      <h3>${this.name}</h3>
      <p>Id: ${this.id}</p>
      <dl>Locations: </dl>


      `
  }
}

//add  after div <img src=>
// <dt id='locName-${this.id}'>Locations: </dt>
// <dd id='locDesc-${this.id}'></dd>
