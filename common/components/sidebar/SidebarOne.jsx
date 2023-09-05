import WidgetCategory from "./WidgetCategory";
import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetPostList from "./WidgetPostList";
import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";

const SidebarOne = ({dataPost, categories}) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory categories={categories}/>
      {/* <WidgetSearch /> */}
      <WidgetPostList postData={dataPost}/>
      <WidgetSocialShare />
      {/* <WidgetInstagramPost /> */}
    </div>
  );
};

export default SidebarOne;
