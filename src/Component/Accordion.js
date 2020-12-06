import React from 'react';


const Accordion = ({items})=>{
    const renderitems= items.map((item)=>{
        return (
            <React.Fragment>
                     
              <div className="title active" 
              onClick={()=>{console.log('title clciked' + item.title )}}
              >
                <i className="dropdown icon" />
                {item.title}
              </div>
              <div className="content active">
                <p>{item.content}</p>                
              </div>
                    
          </React.Fragment>
        );

    })
return <div className="ui styled accordion">{renderitems}</div>
};

export default Accordion;