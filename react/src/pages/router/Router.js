import React from 'react'
import Homepage from '../01_home_page/HomePage'
import BlogPage from '../02_blog_page/BlogPage'
import PostPage from '../03_post_page/PostPage'
import CatologuePage from '../04_catologue_page/CatologuePage'
import ItemPage from '../05_item_page/ItemPage'
import AboutPage from '../06_about_page/AboutPage'
// import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'


export default function Router() {
    //Can spit route later for authentication

    return (<></>
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<Homepage/>} exact={true}/>
    //         <Route path="/about" element={<AboutPage/>} exact={true}/>
    //         <Route path="/blog" element={<BlogPage/>} exact={true}/>
    //         <Route path="/" element={<PostPage/>} exact={true}/>
    //         <Route path="/" element={<CatologuePage/>} exact={true}/>
    //         <Route path="/" element={<ItemPage/>} exact={true}/>
    //         {/* Route guard */}
    //         <Route path="*" element={<Navigate to="/404" />} />
    //         <Route path="/404" element={<Homepage/>} exact={true}/>
    //     </Routes>
    // </BrowserRouter>
    )
}