import React, { component } from 'react';
import ContainerItem from './containerItem';


const ContainerList = ({conList}) => {

    //repotags, id, created, size
  //id has to be actual container id
  const con = conList.map((container, inx) => {
    //do we really need to delete sha?
    // const id = container.Id.slice(7);
    return(
      <ContainerItem key={inx} id={container.Id} getData={() => getData(container.Id)} container={container}/>
    )
  });

  
  // console.log(conName, 'conname');
    // console.log(conName, 'con')
  return (
    // <ul className='container_list'>
    //   {conName}
    // </ul>
    <ul className='container_list'>
      {/* <div className='container_head'>
        <div className="item-name">Name</div> 
        <div className="item-createdat">Created</div> 
        <div className="item-state">State</div>
      </div> */}
      {con}
    </ul>

  );
};

export default ContainerList;


{/* <ul className='container_list'> */}
      
{/* <div>
  {conList.map((container, id) => <h2 key={id}>{container.Id}</h2>)}
</div>
</ul> */}