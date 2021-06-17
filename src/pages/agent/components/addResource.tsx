import React,{useState} from 'react'
  import './addResource.css'



//通过接口来声明父组件传递来的参数类型
interface IProps{
  isModalVisible: boolean,
  getChildData? : any
}
// const allResource = ['Firefox','Ubuntu','Chrome','IE','Safari','Opera','360','baidu']

const AddResource :React.FC<IProps> = props=>  {

  const [modalText, setModalText] = useState('Separate multiple resource name with commas');
  const [inputValue, setInputValue] = useState('')
  const [clientY, setClientY] = useState<number>(0) 

  document.addEventListener("click", function (e) {
    console.log(e.clientY)
    setClientY(e.clientY)
})

  // 获取input框内的值
  const handleSubmit = () => {
    if(inputValue){
      props.getChildData(false, inputValue)
      setModalText('Separate multiple resource name with commas')
      setInputValue('')
    }else{
      setModalText('Please input value')
    }
  };

  const handleCancel = () => {
    setInputValue('')
    props.getChildData(false,'')
  };

  //这里要做输入格式规范检查
  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    // .replace(/[^a-zA-Z]/g,'')
    const str: string = event.target.value
    setInputValue(str)
  }


  return (
    <div className={clientY > 750 ? "add-resource-up" : "add-resource-down"}>
    <div className={clientY > 750 ? "main-content-up" : "main-content-down"}>
      <div className="icon-close" onClick= {() => {props.getChildData(false,'') }}></div>
      <p className='res-text'>{modalText}</p>
      <input 
      className="res-input"   
      type="text" 
      value = {inputValue} 
      onChange={handleChange} 
      placeholder="input value"/>
      <div style={{float: 'left'}}>
        <button className="submit-btn" onClick= {handleSubmit} >Add Resources</button>
        <button className="cancel-btn" onClick={handleCancel}> Cancel</button>
      </div>
    </div>
    <div className={clientY > 750 ? 'main_triangle-up':'main_triangle-down'}></div>
    </div>
  );
};

export default AddResource;
