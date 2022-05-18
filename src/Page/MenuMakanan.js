import React, { Component } from "react"
import ListMakanan from "../ListData/ListMakanan"

class MenuMakanan extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: 0
    }
    this.ubahPesanan = this.ubahPesanan.bind(this)
    this.pesanan = this.pesanan.bind(this)
  }

  ubahPesanan(){
    this.setState((state, props) => {
      return{
        pesan: state.order
      }
    })
  }

  pesanan(e){
    console.log(e.target.value)
  }
  render(){
    return(
      <div>
        <h3>Daftar Makanan yang Kami sediakan : </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan dataList="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                <center>
                  <button onClick={this.state.pesan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan dataList="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                <center>
                  <button onClick={this.state.pesan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan dataList="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                <center>
                  <button onClick={this.state.pesan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan dataList="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                <center>
                  <button onClick={this.state.pesan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan dataList="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
                <center>
                  <button onClick={this.state.pesan}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <input type="text" onChange={this.pesanan} value="Masukan Pesanan Anda"/>
        <h3>Pesanan Anda : {this.state.order}</h3>
      </div>
    )
  }
}

export default MenuMakanan;
