import React, { Component } from 'react'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      output:'0'
    }
  }
  
  render() {
    return (
      <div id="contect">
        <div className="card mb-4">
          <div className="card-body">
            <form className="mb-3" onSubmit={(e)=>{
              e.preventDefault()
              
            }}>
              <div>
                <label className="float-left"><b>Input</b></label>
                <span className="float-right text-muted">
                  Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input 
                  onChange={(e)=>{
                    const etherAmount = this.input.value.toString()
                    this.setState({
                      output: etherAmount*100
                    })
                    
                  }}
                  ref={(input)=>{
                    this.input = input
                  }}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src="" height="32" alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp; ETH
                  </div>
                </div>
              </div>
              <div>
                <label className="float-left"><b>Output</b></label>
                <span className="float-right text--muted">
                  Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-2">
                <input 
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="0"
                  value={this.state.output}
                  disabled />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src="" height="32" alt="" />
                    &nbsp; DApp
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <span className="float-left text-muted">Exchange rate</span>
                <span className="float-right text-muted">1 ETH = 100 Dapp</span>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg"> SWAP!</button>            
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
