/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-max-depth */

import CouponCard from './components/CouponCard/CouponCard';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from './components/Header/Header';

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
  return (
    <>
      <Header />
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
