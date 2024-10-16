"use client"
import ProjectCart from "../ProjectCard"
import Kmays from "../../../../assets/images/kmays.png"
import Simmsuprimentos from "../../../../assets/images/simmsuprimentos.png"
import Bauducco from "../../../../assets/images/bauducco.png"
import Aviator from "../../../../assets/images/aviator.png"
import Stuhrling from "../../../../assets/images/stuhrling.png"
import Maya from "../../../../assets/images/maya-capital.png"
import Enterlight from "../../../../assets/images/enterlight.png"
import { useState } from "react"

function Featured(){
    const [showMore, setMore] = useState(false);

    return(
        <div className="p-4 xl:max-w-[1280px] xl:m-auto">
             <h2 className="font-bebas text-[44px] text-white mb-3">FEATURED PROJECTS</h2>
             <p className="text-[#c7c7c7] font-manrope">Here are some of the selected projects that showcase my passion for front-end development</p>
             <div className="xl:grid xl:grid-cols-2 xl:gap-4">
                <ProjectCart itemImage={Kmays} itemTitle={"Oticas Kmays"} itemDescription={
                    `Ecommerce store focused on glasses, in this project the VTEX platform was used, with React, GraphQL, Sass and API consumption. I worked on this project from beginning to end, from the web pages to the backend applications.`
                } projectDate={`2024`} projectRole={"Fullstack Developer"} projectLink={`https://www.oticaskmays.com.br/`} />

                <ProjectCart itemImage={Enterlight} itemTitle={"Enterlight"} itemDescription={
                    `In this project I worked on an ongoing basis, transforming all CSS into Sass and creating customizable components to improve the user experience.`
                } projectDate={`2024`} projectRole={"Fullstack Developer"} projectLink={`https://www.enterlight.com.br/`} />
                
                { !showMore ?
                    null
                :
                    <>
                        <ProjectCart itemImage={Simmsuprimentos} itemTitle={"Simm Suprimentos"} itemDescription={
                            `Virtual variety store, I worked on the website domain transition, where the sale to another brand took place, I worked using VUE.JS to redo the components using the VTEX Legacy platform.`
                        } projectDate={`2022`} projectRole={"Fullstack Developer"} projectLink={`https://www.simmsuprimentos.com.br/`} />
                        <ProjectCart itemImage={Bauducco} itemTitle={"Bauducco"} itemDescription={
                        `I was responsible for the store's Ongoing, implementing adjustments and new features to improve the user's shopping experience.`
                        } projectDate={`2021`} projectRole={"Fullstack Developer"} projectLink={`https://www.lojabauducco.com.br/`} />
                        <ProjectCart itemImage={Aviator} itemTitle={"Aviator"} itemDescription={
                        `I worked as a freelancer on the project to implement internal improvements in some components of the store to facilitate customer use.`
                        } projectDate={`2023`} projectRole={"Fullstack Developer"} projectLink={`https://www.aviator.com.br/`} />
                        <ProjectCart itemImage={Stuhrling} itemTitle={"Stuhrling"} itemDescription={
                        `Designer watch store, in this project React Js with Deno was used, on the DECO platform with VTEX integration.`
                        } projectDate={`2023`} projectRole={"Fullstack Developer"} projectLink={`https://www.stuhrlingbrasil.com.br/`} />
                        <ProjectCart itemImage={Maya} itemTitle={"Maya Capital"} itemDescription={
                        `In this project, I was hired by the Deco CX platform itself to recreate Maya Capital's website on their platform for possible client acquisition.`
                        } projectDate={`2023`} projectRole={"Front End Developer"} projectLink={`https://maya-capital.deco.site/`} />
                    </>

                }
             </div>
             { !showMore ?
                <div className="cursor-pointer m-auto bg-[#D3E97A] text-center w-40 h-12 rounded-full px-2 font-manrope font-bold text-black flex justify-center items-center" onClick={()=> setMore(true)}>
                    See all projects
                </div>
            :null}
        </div>
    )
}

export default Featured