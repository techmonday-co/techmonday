import Link from "next/link";
import Image from "next/image";
import { SectionTitleTwo } from "../../elements/sectionTitle/SectionTitle";
import {removeDuplicates, slugify} from '../../utils';

const CategoryList = ({categories, showListLink}) => {
    
  return (
    <div className="axil-categories-list axil-section-gap bg-color-grey">
      <div className="container">
        {showListLink ? <SectionTitleTwo title="Trending Topics" btnText="See All Topics" btnUrl="/categories" /> : "" }
        <div className="row">
          <div className="col-lg-12">
            {/* Start List Wrapper  */}
            <div className="list-categories d-flex flex-wrap">
              {/* Start Single Category  */}

              
              {categories.map((category, index) => (
                <div className="single-cat" key={index}>
                <div className="inner">
                <Link href={`/categories/${slugify(category.slug)}`}>
                    <div className="thumbnail">
                      <Image
                        src={category.image}
                        alt={category.name}
                        height={180}
                        width={180}
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">{category.name}</h5>
                    </div>
                  </Link>
                </div>
              </div>
              ))}
              
              {/* End Single Category  */}
            </div>
            {/* Start List Wrapper  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
