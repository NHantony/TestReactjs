import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import JoditEditor from "jodit-react";
function App() {

  const [toggleButton, settoggleButton] = useState(false);
  const handleClick = () => {
    settoggleButton(!toggleButton)
  }
  return (

    <div className="App">
      <div className="header">
        <div className="header_icon_Back"></div>
        <div className="header_title">
          Thêm sản phẩm
        </div>
      </div>
      <div className="content">
        <div className="content_Left">

          <div className="titleAnđesc_Product">
            <div className="title_Product">Tiêu đề sản phẩm</div>
            <input className="title_input" placeholder='Nhập tiêu đề sản phẩm'></input>
            <div className="max_sign">
              <span className="count_sign">0</span>
              <span className="count_sign">/255</span>

              <div className="Desc_Product">
                <div className="Desc_title">Mô tả sản phẩm</div>
                <JoditEditor className='Desc_content'
                  placeholder="Nhập mô tả sản phẩm"
                />
              </div>
            </div>
          </div>

          <div className="img_Product">
            <div className="img_title">Hình ảnh sản phẩm</div>
            <div className="upload_img_Box">
              <div className="upbload_img_btn">
                <button>
                  <div className='uploadIcon'></div>
                  Tải hình ảnh lên
                </button>
                <a className="upbload_img_url">Nhập từ URL</a>
              </div>
              <div className='desc_upload_img'>
                &bull; Hình ảnh định dạng png, jpg, jpeg không quá 5Mb
              </div>
            </div>
          </div>

          <div className="video_Product">
            <div className="video_title">Video sản phẩm</div>
            <div className="upload_video_Box">
              <div className="upbload_video-btn">
                <button>
                  <div className='uploadIcon'></div>Tải video lên</button>
                <a className="upbload_video_url">Nhập từ URL</a>
              </div>
              <div className='desc_upload_video'>
                &bull; Video định dạng mov, mp4 không quá 30Mb
              </div>
            </div>
          </div>

          <div className="price_Product">

            <div className="price_Product_title">Giá</div>
            <div className="price_Product_content">
              <div className="price_Product_Left">
                <div className="price_Product_Left_title">Giá sản phẩm</div>
                <input className="price_Product_Left_input" placeholder="Nhập giá sản phẩm"></input>
              </div>
              <div className="price_Product_Right">
                <div className="price_Product_Right_title">Giá sản phẩm</div>
                <input className="price_Product_Right_input" placeholder="Nhập giá sản phẩm"></input>
              </div>
            </div>

          </div>
        </div>


        <div className="content_Right">
          <div className="ready">
            <div className="title_ready">Sẵn sàng bán</div>

            <div className='toggle' onClick={handleClick}>
              {toggleButton ? <div className='toggleLeft'></div> :
                <div className='toggleRight'>
                </div>}

            </div>
          </div>
          <div className="info_Product">
            <div className="info_Product_title_grp">
              <div className="info_Product_title">Thông tin sản phẩm</div>
              <img className="info_Product_icon"></img>
            </div>
            <div className="category_Product">
              <div className="category_Product_title">Danh mục sản phẩm</div>
              <select className="list_category_Product" placeholder="Chọn danh mục sản phẩm">
                <option>Chọn danh mục sản phẩm</option>
                <option>Dụng cụ học tập</option>
                <option>Dụng cụ văn phòng</option>
              </select>
            </div>
            <div className="type_Product">
              <div className="type_Product_title">Loại sản phẩm</div>
              <input className="type_Product_input" placeholder='Nhập loại sản phẩm'></input>
            </div>
            <div className="type_Product">
              <div className="type_Product_title">Loại sản phẩm</div>
              <input className="type_Product_input" placeholder='Nhập loại sản phẩm'></input>
            </div>
          </div>


          <div className="info_Product">
            <div className="info_Product_title_grp">
              <div className="info_Product_title">Thông tin sản phẩm</div>
              <img className="info_Product_icon"></img>
            </div>
            <div className="category_Product">
              <div className="category_Product_title">Danh mục sản phẩm</div>
              <select className="list_category_Product" placeholder="Chọn danh mục sản phẩm">
                <option>Chọn danh mục sản phẩm</option>
                <option>Dụng cụ học tập</option>
                <option>Dụng cụ văn phòng</option>
              </select>
            </div>
            <div className="type_Product">
              <div className="type_Product_title" >Loại sản phẩm</div>
              <input className="type_Product_input" placeholder='Nhập loại sản phẩm'></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
