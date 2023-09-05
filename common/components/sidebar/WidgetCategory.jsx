import Link from "next/link";
import Image from "next/image";
import { removeDuplicates, slugify } from "../../utils";

const WidgetCategory = ({ categories }) => {
  return (
    <div className="axil-single-widget widget widget_categories mb--30">
      <ul>
        {categories.slice(0, 4).map((category) => (
          <li className="cat-item" key={category.slug}>
            <Link href={`/categories/${category.slug}`}
              className="inner">
                <div className="thumbnail">
                  <Image
                    src={category.image}
                    alt={category.name}
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">{category.name}</h5>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetCategory;
