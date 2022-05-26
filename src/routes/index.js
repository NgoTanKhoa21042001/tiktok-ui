// Layouts
import { HeaderOnly } from '~/components/Layout';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// file này dùng mục đích là ko cần login vẫn xem dc

const publishRoutes = [
  // Route laf object naỳ
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// file này dùng mục đích là phải login mới xem dc

const privateRoutes = [];

export { publishRoutes, privateRoutes };
