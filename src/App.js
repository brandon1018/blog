import './App.css';
import { useState } from 'react'

function App() {

  const title = "React Blog"
  const [blogList, changeBlogList] = useState(['list1', 'list2', "list3"])
  let [likeCount, addLikeCount] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">


      <div className="black-nav">
        <h4 id={title}>{title}</h4>
      </div>

      <button onClick={function () {
        let tempBlogList = [...blogList];
        tempBlogList[0] = 'newList1';
        changeBlogList(tempBlogList);
      }}>글수정</button>

      <button onClick={function () {
        let tempBlogList = [...blogList];
        tempBlogList.sort();
        changeBlogList(tempBlogList);
      }}>글정렬</button>


      <div className='list'>
        <h4>{blogList[0]} <span onClick={() => { addLikeCount(likeCount++) }}>👍</span> {likeCount} </h4>
        <p></p>
      </div>
      <div className='list'>
        <h4>{blogList[1]}</h4>
        <p></p>
      </div>
      <div className='list'>
        <h4>{blogList[2]}</h4>
        <p></p>
      </div>



    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;