import React from 'react';
import {  Breadcrumb } from 'antd';
import {connect} from 'react-redux';
import {changeTest} from './../../Action'
class Headerlines extends React.PureComponent {
  state = { 
  };

  
  render() {
    const { date } = this.state;
    let {test}=this.props;
    return (
      <div>
            <a href="#" onClick={this.props.change} >生活 {test} </a>
            <a href="#">情感 </a>
            <a href="#">留念 </a>
            <a href="#">小诗 </a>
      </div>
    );
  }
}

//需要渲染什么数据
function mapStateToProps(state,ownProps) {
  console.log('state',state);
  return {
      test: state.Headeruducer.test
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
     change:()=>{
      dispatch(changeTest(2))
     }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Headerlines);