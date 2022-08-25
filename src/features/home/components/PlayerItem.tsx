import React from 'react';

function PlayerItem({ data }: {data:any}) {
  return (
    <div className="flex flex-wrap">
      {data.results.map((item: any) => (
        <div key={item.id} className="m-5">
          <img src={item.image} alt={item.name} width={100} height={100} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayerItem;
