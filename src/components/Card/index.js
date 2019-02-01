import React, { Component } from 'react';
import noImage from "../../images/noImage.gif";
import SelectShelf from "../SelectShelf";
import "./Card.css"


class  Card extends Component {
    
    render() { 
        const {item, changeId, onChangeSelect, onClickPlus}=this.props

        const styleImg = image => {
            return { backgroundImage: `url(${image})` };
          };
      
          const styleImgNon = image => {
            return { backgroundImage: `url(${noImage})` };
          };
        return ( 
            <li className="item__book">
                {item.imageLinks ? (
                  <div
                    className="container_img-book"
                    style={styleImg(item.imageLinks.thumbnail)}
                  />
                ) : (
                  <div
                    className="container_img-book"
                    style={styleImgNon({ noImage })}
                  />
                )}

                <div className="info__book">
                  <h3 className="name__book">{item.title}</h3>
                  {item.authors ? (
                    item.authors.map((author, index) => (
                      <h4 className="authors__book" key={index}>
                        {author}
                      </h4>
                    ))
                  ) : (
                    <div>unknown</div>
                  )}
                </div>
                {changeId && changeId === item.id ? (
                  false
                ) : (
                  <i
                    className=" btnPlus fas fa-chevron-circle-down"
                    id={item.id}
                    onClick={onClickPlus}
                  />
                )}
                <SelectShelf
                  changeId={changeId}
                  onChangeSelect={onChangeSelect}
                  bookId={item.id}
                  bookShelf={item.shelf}
                />
              </li>
         );
    }
}
 
export default Card;