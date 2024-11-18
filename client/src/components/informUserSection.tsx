import React from 'react';
import { contentInformUser_1, contentInformUser_2, contentInformUser_3 } from '../resources/landigpageTextContent.tsx';

interface Order {
    firstGridElementRef: React.RefObject<HTMLDivElement>;
}
const InformUserSection: React.FC<Order> = ({firstGridElementRef}) => {
    
    
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-64 max-[1111px]:gap-8 p-14" id='InformUserSection' ref={firstGridElementRef}>
            <div ref={firstGridElementRef}>{contentInformUser_1}</div>
            <div className="col-start-2 row-start-2">{contentInformUser_2}</div>
            <div className="row-start-3">{contentInformUser_3}</div>
        </div>
    )
}

export default InformUserSection;