import React,{useCallback, useEffect, useState} from 'react'
  import './addResource.css'



//通过接口来声明父组件传递来的参数类型
interface IProps{
  isModalVisible: boolean,
  getChildData? : any,
  clientY:number
}
const allResource = ['GOOGLE','FIREFOX','UBUNTU','CHROME','IE','SAFARI','OPERA','360','BAIDU']

const AddResource :React.FC<IProps> = props=>  {

  const [modalText, setModalText] = useState('Separate multiple resource name with commas');
  const [inputValue, setInputValue] = useState('')
  const clientError = props.clientY

  useEffect(()=>{
    let elems = document.getElementsByClassName("add-resource")
    if(elems.length > 1){
      props.getChildData(false,'')
    }
  },[])


  const handleSubmit = () => {
    if(inputValue){
        if( !CheckIsChinese(inputValue)){
          if(checkInput(inputValue)){
            setModalText("提交成功")
            props.getChildData(false, inputValue)
            setInputValue('')
            setBg()
          }else{
            setModalText("请输入正确的浏览器名称")
          setInputValue('')
          }  
        }else{
          setModalText("请输入英文字符")
          setInputValue('')
        } 
    }else{
      setModalText('Please input value')
    }
  };


  const setBg =useCallback(()=>{
    let hidebg: HTMLElement | null = document.getElementById("hidebg");
    if(hidebg){
      hidebg.style.display="none";
    }
  },[])

  const handleCancel = () => {
    setInputValue('')
    setBg()
    props.getChildData(false,'')
  };


//检查输入的值是否是符合要求的浏览器名称
  const checkInput = (str: string) : Boolean=>{
    const strs = str.split(",")
    let flag = true
    for(let i = 0; i < strs.length ; i++){
      strs[i] = strs[i].toLocaleUpperCase()
      if(allResource.indexOf(strs[i]) === -1){
        flag = false
        break;
      }
    }
     return flag
  }
  
//检查是否输入了中文
  const CheckIsChinese = (s:string) => {
    var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
    if(reg.test(s)){
      return true
    } else{
      return false
    } 
  }
 
  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const str: string = event.target.value
    setInputValue(str)
  }

  return (
    <div className={clientError< 200 ? "add-resource add-resource-up" : "add-resource add-resource-down"} >
    <div className={clientError < 200 ? "main-content-up" : "main-content-down"}>
      <div className="icon-close" onClick= {() => {
        setBg()
        props.getChildData(false,'') 
        }}></div>
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
    <div className={clientError < 200 ? 'main_triangle-up':'main_triangle-down'}></div>
    </div>
  );
};

export default AddResource;
