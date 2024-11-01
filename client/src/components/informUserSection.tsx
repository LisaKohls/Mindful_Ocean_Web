import React from 'react';

interface Order {
    text_one: string;
    text_two: string;
    text_three: string;
    text_four: string;
    firstGridElementRef: React.RefObject<HTMLDivElement>;
}
const InformUserSection: React.FC<Order> = ({text_one, text_two, text_three, text_four, firstGridElementRef}) => {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-64 p-14" id='InformUserSection' ref={firstGridElementRef}>
            <div ref={firstGridElementRef}>{"Microplastics are defined as plastics that are smaller than 5mm (0.20 in) and are a growing problem affecting coastal communities, marine ecosystems, marine life, and human health"}</div>
            <div className="col-start-2 row-start-2">{"Microplastics are defined as plastics that are smaller than 5mm (0.20 in) and are a growing problem affecting coastal communities, marine ecosystems, marine life, and human health"}</div>
            <div className="row-start-3">{"Microplastics are defined as plastics that are smaller than 5mm (0.20 in) and are a growing problem affecting coastal communities, marine ecosystems, marine life, and human health"}</div>
        </div>
    )
}

export default InformUserSection;