import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";
import Slider from "react-slick";
import { slugify } from "../../utils";

const PostSectionTwo = ({ postData, adBanner, headingTitle }) => {
  const defaultActiveCat = postData[0].category.slug
  const defaultData = postData[0].posts || []
  const [activeNav, setActiveNav] = useState(defaultActiveCat);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (eventKey) => {
    setActiveNav(eventKey);
  
    const selectedPostItem = postData.filter(postItem => postItem.category.slug === eventKey)
  
    setTabPostData(selectedPostItem[0].posts);
  };

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow next-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-right"></i>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow prev-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-left"></i>
      </button>
    );
  }

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,	
        },
      },
    ],
  };

  return (
    <div className="axil-tab-area axil-section-gap bg-color-white">
      <div className="wrapper">
        <div className="container">
          {adBanner === true ?
            <div className="row">
              <div className="col-lg-12">
                <AddBanner
                  img="/images/add-banner/banner-03.webp"
                  pClass="mb--30"
                />
              </div>
            </div>
          : ""
          }

          <SectionTitleOne title={ headingTitle || "Innovation & Tech"} />
          <div className="row">
            <div className="col-lg-12">
              <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
                <Nav className="axil-tab-button nav nav-tabs mt--20">
                  {postData.map(({category}) => (
                    <Nav.Item key={category.id}>
                      <Nav.Link
                        onClick={() => handleChange(category.slug)}
                        eventKey={category.slug}
                      >
                        {category.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey={activeNav} className="single-tab-content">
                    <Slider
                      {...slideSettings}
                      className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                    >
                      {tabPostData.map((data) => (
                        <div className="slick-single-layout" key={data.slug}>
                          <div className="content-block modern-post-style text-center content-block-column">
                            <div className="post-content">
                              <div className="post-cat">
                                {/* <div className="post-cat-list">
                                  <Link
                                    href={`/categories/${slugify(data.cate)}`}
                                  >
                                    <a className="hover-flip-item-wrapper">
                                      <span className="hover-flip-item">
                                        <span data-text={data.cate}>
                                          {data.cate}
                                        </span>
                                      </span>
                                    </a>
                                  </Link>
                                </div> */}
                              </div>
                              <h4 className="title">
                                <Link href={`/posts/${data.slug}`}>
                                  {data.title}
                                </Link>
                              </h4>
                            </div>
                            {data.coverImage ? 
                            <div className="post-thumbnail">
                              <div className="round-shape">
                                <Image
                                  src="/images/icons/shape-01.webp"
                                  alt="Round Shape"
                                  height={77}
                                  width={390}
                                  priority={true}
                                />
                              </div>
                              <Link href={`/posts/${data.slug}`}>
                                <Image
                                  src={data.coverImage}
                                  alt={data.title}
                                  height={260}
                                  width={390}
                                  priority={true}
                                />
                              </Link>
                            </div>
                            :""}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className="axil-tab-area axil-section-gap bg-color-white">
  //     <div className="wrapper">
  //       <div className="container">
	// 		{adBanner === true ?  
	// 		<div className="row">
  //           <div className="col-lg-12">
  //             <AddBanner
  //               img="/images/add-banner/banner-03.webp"
  //               pClass="mb--30"
  //             />
  //           </div>
  //         </div> : ""}
         
  //         <SectionTitleOne title={ headingTitle || "Innovation & Tech"} />
  //         <div className="row">
  //           <div className="col-lg-12">
  //             <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
  //               <Nav className="axil-tab-button nav nav-tabs mt--20">
  //                 {filters.map((data) => (
  //                   <Nav.Item key={data.id}>
  //                     <Nav.Link
  //                       onClick={handleChange}
  //                       eventKey={slugify(data.cate)}
  //                     >
  //                       {data.cate}
  //                     </Nav.Link>
  //                   </Nav.Item>
  //                 ))}
  //               </Nav>

  //               <Tab.Content>
  //                 <Tab.Pane eventKey={activeNav} className="single-tab-content">
  //                   <Slider
  //                     {...slideSettings}
  //                     className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
  //                   >
  //                     {tabPostData.map((data) => (
  //                       <div className="slick-single-layout" key={data.slug}>
  //                         <div className="content-block modern-post-style text-center content-block-column">
  //                           <div className="post-content">
  //                             <div className="post-cat">
  //                               <div className="post-cat-list">
  //                                 <Link
  //                                   href={`/category/${slugify(data.cate)}`}
  //                                 >
  //                                   <a className="hover-flip-item-wrapper">
  //                                     <span className="hover-flip-item">
  //                                       <span data-text={data.cate}>
  //                                         {data.cate}
  //                                       </span>
  //                                     </span>
  //                                   </a>
  //                                 </Link>
  //                               </div>
  //                             </div>
  //                             <h4 className="title">
  //                               <Link href={`/posts/${data.slug}`}>
  //                                 <a>{data.title}</a>
  //                               </Link>
  //                             </h4>
  //                           </div>
  //                           {data.featureImg ? 
  //                           <div className="post-thumbnail">
  //                             <div className="round-shape">
  //                               <Image
  //                                   src="/images/icons/shape-01.webp"
  //                                   alt="Round Shape"
  //                                   height={77}
  //                                   width={390}
  //                                   priority={true}
  //                                 />
  //                             </div>
  //                             <Link href={`/posts/${data.slug}`}>
  //                               <a>
  //                                 <Image
  //                                   src={data.featureImg}
  //                                   alt={data.title}
  //                                   height={260}
  //                                   width={390}
  //                                   priority={true}
  //                                 />
  //                               </a>
  //                             </Link>
  //                           </div>
  //                           :""}
  //                         </div>
  //                       </div>
  //                     ))}
  //                   </Slider>
  //                 </Tab.Pane>
  //               </Tab.Content>
  //             </Tab.Container>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default PostSectionTwo;
