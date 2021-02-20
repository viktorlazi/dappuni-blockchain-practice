import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Web3 from 'web3'
import EthSwap from '../abis/EthSwap.json'
import Token from '../abis/Token.json'

class App extends Component {
  async componentDidMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  async loadBlockchainData(){
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({account:accounts[0]})
    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ethBalance})

    // load token
    const networkId = await web3.eth.net.getId()
    const tokenData = Token.networks[networkId]
    if(tokenData){
      const token = new web3.eth.Contract(Token.abi, tokenData.address)
      this.setState({token})
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      this.setState({tokenBalance: tokenBalance.toString()})
      console.log(tokenBalance)

    }else{
      window.alert('token contract not deployed to network')
    }
  }
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('non ethereum browser detected')
    }
  }
  constructor(props){
    super(props)
    this.state = {
      account:'',
      token:{},
      ethBalance:'',
      tokenBalance:''
    }
    
  }
  render() {
    return (
      <div>
        <Navbar account = {this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
