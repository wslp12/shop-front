/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-max-depth */
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CouponCard from './components/CouponCard/CouponCard';
import Badge from '@mui/material/Badge';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const App = () => {
  const arr = ['신상', '특가 할인제품', '니트', '바지'];
  return (
    <>
      <header className="h-16 bg-slate-50 border-b border-slate-100">
        <div className="flex h-full pl-4 pr-4">
          <div className="first:mr-auto flex">
            <button type="button">
              <MenuIcon />
            </button>
          </div>
          <div className="flex justify-center items-center ml-12 text-xl bg-gradient-to-r from-green-900 to-red-500 bg-clip-text fill-transparent text-transparent">
            마무사
          </div>
          <div className="flex-grow flex justify-around">
            {arr.map((arrItem) => {
              return (
                <button type="button" key={arrItem}>
                  <div key={arrItem}>{arrItem}</div>
                </button>
              );
            })}
          </div>
          <div className="last:ml-auto flex gap-3">
            <button type="button">
              <SearchIcon />
            </button>

            <button type="button">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </button>
            <button type="button">
              <PermIdentityIcon />
            </button>
          </div>
        </div>
      </header>
      <section className="flex flex-col p-3 gap-3">
        <section className="flex flex-row gap-20 justify-center h-24">
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </section>
        <section className="flex flex-col justify-cen items-center gap-3">
          <article className="flex w-4/5 bg-violet-50 gap-12 rounded-md flex-col">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: '#e4dffb' }}>
                <Tabs
                  value={0}
                  aria-label="basic tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab label="전체" {...a11yProps(0)} />
                  <Tab label="남성" />
                  <Tab label="여성" />
                </Tabs>
              </Box>
              <div className="flex">
                <section className="flex flex-col justify-center items-center w-20 gap-3">
                  <div>전체</div>
                  <div>여성</div>
                  <div>남성</div>
                </section>
                <div className="flex gap-4 p-2">
                  <article className="bg-violet-200 rounded-lg flex flex-col overflow-hidden">
                    <img
                      src="https://xexymix.com/shopimages/xexymix/0060020006193.jpg?1653532098"
                      alt="사진1"
                      width={180}
                    />
                    <div>레깅스</div>
                    <div>39,800 원</div>
                  </article>
                  <article className="bg-violet-200 rounded-lg flex flex-col overflow-hidden">
                    <img
                      src="https://xexymix.com/shopimages/xexymix/0060020006193.jpg?1653532098"
                      alt="사진1"
                      width={180}
                    />
                    <div>레깅스</div>
                    <div>39,800 원</div>
                  </article>
                  <article className="bg-violet-200 rounded-lg flex flex-col overflow-hidden">
                    <img
                      src="https://xexymix.com/shopimages/xexymix/0060020006193.jpg?1653532098"
                      alt="사진1"
                      width={180}
                    />
                    <div>레깅스</div>
                    <div>39,800 원</div>
                  </article>
                </div>
              </div>
            </Box>
          </article>
        </section>
      </section>
    </>
  );
};

export default App;
