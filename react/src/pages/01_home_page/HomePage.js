import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import {fetchAPI} from "../../api"
export default function Homepage() {

  useEffect(() => {
    console.log(getData())
    return () => {
      
    }
  }, [])

  const getData = async () =>{
    const data = await fetchAPI("/global",{
      // decide on what data should populate
      populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },

    })
    
    return data?.data?.attributes
  }
  
  const firstSection = (
    <Grid container direction="row" sx={{ pt: '70px', px: 2, backgroundColor: "pink" }}>
      <Grid item xs={7}>test</Grid>
      <Grid container xs={5} item direction="column" >
        <div>Title</div>
        <div>Content</div>
      </Grid>
    </Grid>
  )
  const secondSection = (
    <Grid container direction="row" sx={{ pt: '70px', px: 2, backgroundColor: "black", color:"white" }}>
  <Grid container xs={4} item direction="column" >
        <div>Title</div>
        <div>Content</div>
      </Grid>
      <Grid container xs={4} item direction="column" >
        <div>Title</div>
        <div>Content</div>
      </Grid>
      <Grid container xs={4} item direction="column" >
        <div>Title</div>
        <div>Content</div>
      </Grid>
  </Grid>
  )
  const thirdSection = (
  <Grid container direction="row" sx={{ pt: '70px', px: 2, backgroundColor: "pink" }}>
    <Grid item xs={7}>test</Grid>
    <Grid item xs={5}>
      <div>Title</div>
    </Grid>
  </Grid>
  )

  return (
    <>
      {firstSection}
      {secondSection}
      {thirdSection}
    </>

  )
}
