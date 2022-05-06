

import React,{ Component } from 'react'


export class App extends Component {

  constructor(){
    super()

    this.state={
      firstName:"",
      bio:"",
      imgSrc:"", 
      profession:"",
      profils:[],
      ok:false

    }
  }

  change =(e)=>{

    if (e.target.name=="firstName"){

      this.setState({firstName:e.target.value})

    }else{

      if(e.target.name=="bio"){

        this.setState({bio:e.target.value})

      }else{

        if(e.target.name=="imgSrc"){

          this.setState({imgSrc:e.target.value})

        }else{

          this.setState({profession:e.target.value})

        }
      }
    }

    console.log(this.state.firstName,this.state.bio,this.state.imgSrc,this.state.profession)


  }
  show =()=>{

    if(this.state.firstName != "" && this.state.bio!="" & this.state.imgSrc!="" & this.state.profession!="" && this.state.profils.length==0){

      this.setState({profils:[...this.state.profils,{firstName:this.state.firstName,bio:this.state.bio,imgSrc:this.state.imgSrc,profession:this.state.profession}]})
    }

    this.setState({ok:!this.state.ok})

  }


  render() {

    return (
      <div>

        <label>firstName:</label><input type="text" name="firstName" onChange={e=>{this.change(e)}} />
        <label>bio:</label><input type="text" name="bio"  onChange={e=>{this.change(e)}}/>
        <label>imgSrc</label><input type="text" name="imgSrc" onChange={e=>{this.change(e)}}/>
        <label>porfession:</label><input type="text" name="profession" onChange={e=>{this.change(e)}} />
        <input type="button" onClick={()=>{this.show()}} value={this.state.ok?"hide":"show"} />
        <div>
          {this.state.ok?this.state.profils.map((el,idx)=>
          
            <div key={idx}>
              
              <div><label>firstName: {el.firstName}</label></div>
              <div><label>bio: {el.bio}</label></div>
              <div><label>imgSrc: {el.imgSrc}</label></div>
              <div><label>profession:<div>{el.profession}</div></label></div>
            
                
            </div>
            
            
          ):<>add data before to be display it</>}

        </div>
      </div>
    )
  }
}

export default App