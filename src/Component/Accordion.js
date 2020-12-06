import React from 'react';


const Accordion = ({items})=>{
    const renderitems= items.map((item)=>{
        return (
            <div>
            <div className="ui accordion">              
              <div className="title active">
                <i className="dropdown icon" />
                {item.title}
              </div>
              <div className="content active">
                <p>{item.content}</p>                
              </div>
            </div>           
          </div>
        );

    })
return <div className="ui styled accordion">{renderitems}</div>
};

export default Accordion;