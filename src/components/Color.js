import React from 'react'

const Color = (props) => {

    const { colorData, setColor } = props

    return (
        <div>
            <ul className='colors ps-0 mb-0'>
                {colorData?.map((item, index) => (
                    <li key={index} style={{ backgroundColor: `${item?.title}` }} onClick={() => setColor(item?._id)}></li>
                ))}
            </ul>
        </div >
    )
}

export default Color
