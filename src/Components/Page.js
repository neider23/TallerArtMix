import React, { Component } from "react";
import Card from "./Libro";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      modal: false,
      imageNew: "",
      authorNew: ""
    };
  }
  componentDidMount() {
    window.localStorage.clear();
    const plays = [
      {
        author: "Dan Brown",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rEotiX72u1M8f-OxtErYAf3LbHFdGhAqpvYCriLbGM3ZutbNlA&s"
      },
      {
        author: "Dan Brown",
        image:
          "https://www.planetadelibros.com.pe/usuaris/libros/fotos/263/m_libros/262820_portada_el-simbolo-perdido_dan-brown_201709050106.png"
      }
    ];
    window.localStorage.setItem("plays", JSON.stringify(plays));
  }

  handleChange = (e, field) => {
    var value = e.target.value.toLowerCase();
    this.setState({
      filterText: value
    });
  };
  handleModal = e => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  };
  handleAdd = (e, list) => {
    e.preventDefault();
    const { imageNew, authorNew } = this.state;
    var newPlay={
      author: authorNew,
        image:
          imageNew
    };
    list.push(newPlay);    
    window.localStorage.clear();
    window.localStorage.setItem("plays",JSON.stringify(list))
    
    this.setState({
      modal: false
    });
  };
  updateValue = (e, field) => {
    e.preventDefault();
    this.setState({
      [field]: e.target.value
    });
  };
  render() {
    setTimeout(() => {this.componentDidMount();
      
    }, 2000);
    const { filterText, modal } = this.state;
    let cards;
    var ifModal;
    const playsStorage = JSON.parse(window.localStorage.getItem("plays"));
    const playsList = playsStorage.filter(val =>
      val.author.toLowerCase().includes(filterText)
    );
    cards = (
      <div className="GridPage">
        {playsList.map(({ key, author, image }) => (
          <Card key={image} Image={image} author={author} />
        ))}
      </div>
    );
    if (modal) {
      ifModal = (
        <>
          <div className="Modal">
            <div className="Box">
              <h3>Ingrese una nueva Obra</h3>
              <label >Autor: </label>
              <input className="Buscar"
                onChange={e => {
                  this.updateValue(e, "authorNew");
                }}
              ></input>
              <br />
              <br />
              <label>Imagen: </label>
              <input className="Buscar"
                onChange={e => {
                  this.updateValue(e, "imageNew");
                }}
              ></input>
              <br />
              <br />
              <button onClick={this.handleModal} className="Btn">Atras</button>
              <button className="Btn"
                onClick={e => {
                  this.handleAdd(e, playsStorage);
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </>
      );
    } else {
      ifModal = (
        <>
          <h1 className="Title">ArtMix</h1>
          <button onClick={this.handleModal}className="Add">Add</button>
         
          {cards}
        </>
      );
    }

    return <>{ifModal}</>;
  }
}
export default Page;
