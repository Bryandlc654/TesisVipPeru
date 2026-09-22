import PageEditor from './PageEditor';
import Blog from '../pages/Blog/Blog';
import { defaultBlogContent, blogScope } from '../cms/defaultPosts';

const AdminBlog = () => (
  <PageEditor
    page="blog"
    defaults={defaultBlogContent}
    scope={blogScope}
    title="Blog"
    preview={Blog}
  />
);

export default AdminBlog;
