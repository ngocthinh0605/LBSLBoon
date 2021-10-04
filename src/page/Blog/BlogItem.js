import React from 'react'
import blogicon from './imgBlog/blogicon.png'

const BlogItem = ({img}) => {
    return (
        <>
             <div className="blog__content-item col l-6">
                <div className="row">
                    <div className="blog__content-item-img col l-5">
                        <img src={img} alt="" className="" />

                    </div>
                    <div className="blog__content-item-inf col l-7">
                        <h2>Launching Game APK in nationwide</h2>
                        <p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat</p>
                        <div>
                            <span>20 March 2021</span>
                            <img src={blogicon} alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogItem
